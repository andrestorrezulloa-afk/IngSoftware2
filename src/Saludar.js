const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const hora = new Date().getHours();
  let saludo = "Hola";

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  div.innerHTML = "<p>" + saludo + ", " + nombre + "!</p>";
});