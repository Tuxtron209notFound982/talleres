// Ejercicio 3: MULTIPLICAR - evento submit con FUNCIÓN ANÓNIMA
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Number() basta aquí: el atributo "required" ya impide enviar campos vacíos
  let numero1 = Number(document.getElementById("num1").value);
  let numero2 = Number(document.getElementById("num2").value);

  alert(`Multiplicación: ${numero1 * numero2}`);
});
