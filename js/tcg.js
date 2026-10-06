const tcgViews = document.querySelectorAll(".content-view");
const tcgButtons = document.querySelectorAll("[data-tcg-view]");

function showTcgView(viewId) {
    tcgViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

tcgButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showTcgView(button.dataset.tcgView);
    });
});
