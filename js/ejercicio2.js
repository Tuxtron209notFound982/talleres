// Ejercicio 2: RESTAR - evento click con FUNCIÓN CON NOMBRE
let botonRestar = document.getElementById("botonRestar");

function resta(event) {
  event.preventDefault();

  let valor1 = parseFloat(document.getElementById("num1").value);
  let valor2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Escribe los dos números.");
    return;
  }

  alert(`Resta: ${valor1 - valor2}`);
}

// Se pasa el nombre SIN paréntesis: addEventListener la ejecutará cuando ocurra el click
botonRestar.addEventListener("click", resta);
