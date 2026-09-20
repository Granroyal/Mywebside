const top10Views = document.querySelectorAll(".content-view");
const top10Buttons = document.querySelectorAll("[data-top10-view]");

function showTop10View(viewId) {
    top10Views.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

top10Buttons.forEach((button) => {
    button.addEventListener("click", () => {
        showTop10View(button.dataset.top10View);
    });
});
