const onePieceViews = document.querySelectorAll(".content-view");
const onePieceButtons = document.querySelectorAll("[data-one-piece-view]");

function showOnePieceView(viewId) {
    onePieceViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

onePieceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showOnePieceView(button.dataset.onePieceView);
    });
});
