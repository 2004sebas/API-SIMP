const img = document.getElementById("img-character");
const character = document.getElementById("character");
const quote = document.getElementById("quote");
const button = document.getElementById("generate");
const apiRest = "https://thesimpsonsquoteapi.glitch.me/quotes";

window.addEventListener("load", apiSimps);
button.addEventListener("click", apiSimps);

function apiSimps() {
    fetch(apiRest)
    .then(response => response.json())
    .then(data => (img.src = data[0].image,
        character.textContent = data[0].character,
        quote.textContent = data[0].quote))
}
