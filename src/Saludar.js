const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const idiomaInput = document.querySelector("#idioma");
const edadInput = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nombre = nombreInput.value.toLowerCase();
  const genero = generoInput.value.toLowerCase();
  const idioma = idiomaInput.value.toLowerCase();
  const hora = new Date().getHours();
  let edad = parseInt(edadInput.value);
  
  let saludo = "";
  let saludoGenero = "";

  if (idioma === "ingles") {
    if (nombre === "") {
      nombre = "visitor";
    }
    if (edad < 0  ) {
      div.innerHTML = "Add a valid age.";
      return;
    }
    if (edad > 30) {
      if (genero === "masculino") {
        saludoGenero = "Mr.";
      } else if (genero === "femenino") {
        saludoGenero = "Mrs.";
      } else {
        saludoGenero = "Mr./Ms.";
      }
    } else {
      if (genero === "masculino") {
        saludoGenero = "Young man";
      } else if (genero === "femenino") {
        saludoGenero = "Young woman";
      } else {
        saludoGenero = "Young person";
      }
    }
    if (hora >= 6 && hora < 12) {
      saludo = "Good morning";
    } else if (hora >= 12 && hora < 18) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }
  } else {
    if (nombre === "") {
      nombre = "visitante";
    }
    if (edad < 0) {
      div.innerHTML = "Ingrese una edad válida.";
      return;
    }
    if (edad > 30) {
      if (genero === "masculino") {
        saludoGenero = "Sr.";
      } else if (genero === "femenino") {
        saludoGenero = "Sra.";
      } else {
        saludoGenero = "Sr./Sra.";
      }
    } else {
      if (genero === "masculino") {
        saludoGenero = "Joven";
      } else if (genero === "femenino") {
        saludoGenero = "Jovencita";
      } else {
        saludoGenero = "Jovencite";
      }
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