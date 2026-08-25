
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "Hola" + "</p>";
});
