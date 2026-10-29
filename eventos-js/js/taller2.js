// Taller 2: CLASIFICAR UNA NOTA (submit, función con nombre)
let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");
let desempeño;
let estado = "aprovado";

formulario.addEventListener("submit", taller2);

function taller2(){
  event.preventDefault();
  let nota = parseFloat(document.getElementById("nota").value);

  if (isNaN(nota)){
    resultado.innerText="ingrese una nota.";
    resultado.className="error";
    return;
  }

  else if (nota < 0 ||  nota > 5){
    resultado.innerText="la nota ingresada debe ser de 0.0 a 5.0";
    resultado.className="error";
    return;
  }

  else if(nota >= 4){
    desempeño="exelente";
  }

  else if (nota >=3){
    desempeño="aceptable";
  }

  else{
    desempeño= "insuficiente";
    estado = "no aprovado";
  }
  resultado.innerText=`nota: ${nota}: ${desempeño}: ${estado}`;
  resultado.className="exito";


}