const pokemonViews = document.querySelectorAll(".content-view");
const pokemonButtons = document.querySelectorAll("[data-pokemon-view]");

function showPokemonView(viewId) {
    pokemonViews.forEach((view) => {
        view.classList.toggle("active", view.id === viewId);
    });
}

pokemonButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showPokemonView(button.dataset.pokemonView);
    });
});
