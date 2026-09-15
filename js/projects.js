const projectViews = document.querySelectorAll("main .content-view");
const projectButtons = document.querySelectorAll("[data-project-view]");

function showProjectView(viewId) {
    if (!Array.from(projectViews).some((view) => view.id === viewId)) {
        return;
    }

    projectViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showProjectView(button.dataset.projectView);
    });
});
