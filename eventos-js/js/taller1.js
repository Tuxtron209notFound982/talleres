let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller1)

function taller1(){
  event.preventDefault();

  let numero = parseFloat(document.getElementById("numero").value);

  //validacion de no nullos y IsNaN

  if (isNaN(numero)){
    resultado.innerText="escriba un numero.";
    resultado.className="error";
    return;
  }
  else if (numero %1 !== 0){
    resultado.innerText="escriba un numero entero."
    resultado.className="error";
  }
  else if (numero %2 === 0){
    resultado.innerText="el numero es par.";
    resultado.className="exito";
  }
  else
    resultado.innerText="el numero es impar";
    resultado.className="exito";

}