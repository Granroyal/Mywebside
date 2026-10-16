import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const htmlFiles = [];
const idsByFile = new Map();

async function findHtmlFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
        if ([".git", "node_modules"].includes(entry.name)) {
            continue;
        }

        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await findHtmlFiles(entryPath);
        } else if (entry.isFile() && entry.name.endsWith(".html")) {
            htmlFiles.push(entryPath);
        }
    }
}

async function fileExists(filePath) {
    try {
        return (await stat(filePath)).isFile();
    } catch {
        return false;
    }
}

async function getIds(filePath) {
    if (idsByFile.has(filePath)) {
        return idsByFile.get(filePath);
    }

    const html = await readFile(filePath, "utf8");
    const ids = new Set([...html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/g)].map(([, , id]) => id));
    idsByFile.set(filePath, ids);
    return ids;
}

function isExternal(reference) {
    return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference);
}

function relativeToRoot(filePath) {
    return path.relative(projectRoot, filePath);
}

await findHtmlFiles(projectRoot);

const issues = [];

for (const htmlFile of htmlFiles) {
    const html = await readFile(htmlFile, "utf8");
    const references = html.matchAll(/\b(?:href|src)\s*=\s*(["'])(.*?)\1/gi);

    for (const match of references) {
        const reference = match[2].trim();

        if (!reference || reference === "#" || isExternal(reference)) {
            continue;
        }

        const [pathAndQuery, fragment] = reference.split("#", 2);
        const localPath = pathAndQuery.split("?", 1)[0];
        const targetFile = localPath
            ? path.resolve(path.dirname(htmlFile), decodeURIComponent(localPath))
            : htmlFile;

        if (!targetFile.startsWith(projectRoot + path.sep) && targetFile !== projectRoot) {
            issues.push(`${relativeToRoot(htmlFile)} → ${reference}: path leaves the project`);
            continue;
        }

        if (!(await fileExists(targetFile))) {
            issues.push(`${relativeToRoot(htmlFile)} → ${reference}: file not found`);
            continue;
        }

        if (fragment && !(await getIds(targetFile)).has(fragment)) {
            issues.push(`${relativeToRoot(htmlFile)} → ${reference}: anchor not found`);
        }
    }
}

if (issues.length > 0) {
    console.error("Broken local links or files found:\n");
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: all local links and files exist.`);
