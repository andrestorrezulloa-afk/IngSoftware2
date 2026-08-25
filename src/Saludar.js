const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const idiomaInput = document.querySelector("#idioma");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value.toLowerCase();
  const idioma = idiomaInput.value.toLowerCase();
  const hora = new Date().getHours();

  let saludo = "";
  let saludoGenero = "";

  if ( idioma === "ingles") {
  
    if (genero === "masculino") {
      saludoGenero = "Mr.";
    } else if (genero === "femenino") {
      saludoGenero = "Mrs.";
    } else {
      saludoGenero = "Mr./Ms.";
    }

    if (hora >= 6 && hora < 12) {
      saludo = "Good morning";
    } else if (hora >= 12 && hora < 18) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }
  } else {

    if (genero === "masculino") {
      saludoGenero = "Señor";
    } else if (genero === "femenino") {
      saludoGenero = "Señora";
    } else {
      saludoGenero = "Señor/a";
    }

    if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }
  }

  div.innerHTML = "<p>" + saludo + ", " + saludoGenero + " " + nombre + "!</p>";
});