const navegacion = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navegacion.classList.remove("visible");
});