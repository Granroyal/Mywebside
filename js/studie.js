const studyViews = document.querySelectorAll("main .content-view");
const studyButtons = document.querySelectorAll("[data-study-view]");

function showStudyView(viewId) {
    if (!Array.from(studyViews).some((view) => view.id === viewId)) {
        return;
    }

    studyViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

studyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showStudyView(button.dataset.studyView);
    });
});
