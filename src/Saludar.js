const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value;
  const hora = new Date().getHours();
  let saludo = "Hola";
  let saludoGenero = "";

  if (genero === "masculino") {
    saludoGenero = "Señor";
  } else if (genero === "femenino") {
    saludoGenero = "Señora";
  } else{
    saludoGenero = "Señor/a";
  }
  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }


  div.innerHTML = "<p>" + saludo + ", " + saludoGenero + " " + nombre + "!</p>";
});