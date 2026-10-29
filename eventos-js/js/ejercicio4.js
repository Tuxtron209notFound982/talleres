// Ejercicio 4: DIVIDIR - evento submit con FUNCIÓN CON NOMBRE
let formularioDividir = document.getElementById("formularioDividir");

function dividir(event) {
  event.preventDefault();

  let numero1 = parseFloat(document.getElementById("num1").value);
  let numero2 = parseFloat(document.getElementById("num2").value);

  // 1) División por cero
  if (numero2 === 0) {
    alert("No es posible dividir entre cero.");
    return;
  }

  // 2) Datos no numéricos
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Escribe los dos números.");
    return;
  }

  alert(`División: ${numero1 / numero2}`);
}

formularioDividir.addEventListener("submit", dividir);
