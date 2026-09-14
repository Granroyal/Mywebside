const raspberryPiViews = document.querySelectorAll(".content-view");
const raspberryPiButtons = document.querySelectorAll("[data-raspberry-pi-view]");

function showRaspberryPiView(viewId) {
    raspberryPiViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

raspberryPiButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showRaspberryPiView(button.dataset.raspberryPiView);
    });
});
