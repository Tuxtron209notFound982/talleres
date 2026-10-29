// Ejercicio 1: SUMAR - evento click con FUNCIÓN ANÓNIMA
let botonSumar = document.getElementById("botonSumar");

botonSumar.addEventListener("click", function (event) {
  // Evita que el formulario se envíe y recargue la página
  event.preventDefault();

  let valor1 = parseFloat(document.getElementById("n1").value);
  let valor2 = parseFloat(document.getElementById("n2").value);

  // isNaN detecta campos vacíos o texto no numérico
  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Escribe los dos números.");
    return;
  }

  alert(`Suma: ${valor1 + valor2}`);
});
