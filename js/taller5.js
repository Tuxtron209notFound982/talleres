// Taller 5: CALCULADORA CON SELECTOR (submit, función con nombre + switch)
let formTaller5 = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

function mostrar(texto, clase) {
  resultado.textContent = texto;
  resultado.className = "mensaje " + clase;
}

function calcular(event) {
  event.preventDefault();

  let textoPrimero = document.getElementById("primero").value;
  let textoSegundo = document.getElementById("segundo").value;
  let operacion = document.getElementById("operacion").value;

  if (textoPrimero === "" || textoSegundo === "") {
    mostrar("Escribe los dos números.", "error");
    return;
  }

  if (operacion === "") {
    mostrar("Selecciona una operación.", "error");
    return;
  }

  let primero = Number(textoPrimero);
  let segundo = Number(textoSegundo);
  let expresion;

  switch (operacion) {
    case "suma":
      expresion = `${primero} + ${segundo} = ${primero + segundo}`;
      break;
    case "resta":
      expresion = `${primero} − ${segundo} = ${primero - segundo}`;
      break;
    case "multiplicacion":
      expresion = `${primero} × ${segundo} = ${primero * segundo}`;
      break;
    case "division":
      if (segundo === 0) {
        mostrar("No es posible dividir entre cero.", "error");
        return;
      }
      expresion = `${primero} ÷ ${segundo} = ${primero / segundo}`;
      break;
  }

  mostrar(expresion, "exito");
}

formTaller5.addEventListener("submit", calcular);
