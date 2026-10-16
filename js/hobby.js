const hobbyViews = document.querySelectorAll(".content-view");
const hobbyButtons = document.querySelectorAll("[data-hobby-view]");

function showHobbyView(viewId) {
    hobbyViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

hobbyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showHobbyView(button.dataset.hobbyView);
    });
});

const requestedView = new URLSearchParams(window.location.search).get("view");

if (requestedView && document.getElementById(requestedView)) {
    showHobbyView(requestedView);
}
