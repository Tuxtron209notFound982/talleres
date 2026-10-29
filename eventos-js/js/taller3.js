// Taller 3: EL MAYOR DE TRES NÚMEROS (submit, función anónima)
// Sin Math.max(): la idea es practicar condicionales.
let formTaller3 = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

function mostrar(texto, clase) {
  resultado.textContent = texto;
  resultado.className = "mensaje " + clase;
}

formTaller3.addEventListener("submit", function (event) {
  event.preventDefault();

  let textoA = document.getElementById("numeroA").value;
  let textoB = document.getElementById("numeroB").value;
  let textoC = document.getElementById("numeroC").value;

  if (textoA === "" || textoB === "" || textoC === "") {
    mostrar("Completa los tres números.", "error");
    return;
  }

  let a = Number(textoA);
  let b = Number(textoB);
  let c = Number(textoC);

  if (a === b && b === c) {
    mostrar("Los tres números son iguales.", "exito");
    return;
  }

  let mayor = a;
  if (b > mayor) {
    mayor = b;
  }
  if (c > mayor) {
    mayor = c;
  }

  mostrar(`El número mayor es ${mayor}.`, "exito");
});
