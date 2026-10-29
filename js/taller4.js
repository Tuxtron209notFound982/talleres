// Taller 4: FORMULARIO DE REGISTRO (submit, función con nombre)
let formTaller4 = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

function mostrar(texto, clase) {
  resultado.textContent = texto;
  resultado.className = "mensaje " + clase;
}

function validarRegistro(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let edadTexto = document.getElementById("edad").value;
  let correo = document.getElementById("correo").value.trim();
  let clave = document.getElementById("clave").value;
  let confirmar = document.getElementById("confirmar").value;

  // Se muestra solo el PRIMER error encontrado, en este orden:
  if (nombre === "") {
    mostrar("Escribe tu nombre.", "error");
    return;
  }

  if (edadTexto === "") {
    mostrar("Escribe tu edad.", "error");
    return;
  }

  let edad = Number(edadTexto);
  if (!Number.isInteger(edad) || edad < 18 || edad > 100) {
    mostrar("La edad debe ser un número entero entre 18 y 100.", "error");
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    mostrar("Escribe un correo válido.", "error");
    return;
  }

  if (clave !== confirmar) {
    mostrar("Las contraseñas no coinciden.", "error");
    return;
  }

  mostrar(`Registro exitoso. Bienvenido(a), ${nombre}.`, "exito");
}

formTaller4.addEventListener("submit", validarRegistro);
