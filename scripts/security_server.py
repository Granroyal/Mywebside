from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from os import getenv


class SecurityHeadersHandler(SimpleHTTPRequestHandler):
    server_version = "StaticSite"
    sys_version = ""

    def translate_path(self, path):
        parts = path.split("/")
        if any(part.startswith(".") for part in parts if part):
            return "__blocked__"

        return super().translate_path(path)

    def end_headers(self):
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "credentialless")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        self.send_header("Cache-Control", "no-store")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "style-src 'self' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data:; "
            "script-src 'self'; "
            "base-uri 'self'; "
            "frame-ancestors 'none';",
        )
        super().end_headers()


if __name__ == "__main__":
    port = int(getenv("PORT", "8080"))
    server = ThreadingHTTPServer(("127.0.0.1", port), SecurityHeadersHandler)
    server.serve_forever()
