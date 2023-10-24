function inversion(){

    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("monto").value;
    const cTiempo = document.getElementById("tiempo").value;

    
    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show");
    const showEmail = document.getElementById("email-show");
    const showTiempo = document.getElementById ("tiempo-show");
    const showInteres = document.getElementById ("porcentaje");

postSimulacion.classList.remove("disabled");
preSimulacion.classList.add("disabled");

const intereses = document.getElementById("interes");
const ganancias = document.getElementById("ganancias");


showNombre.innerText = cNombres;
showEmail.innerText = cEmail;



const valor1= 1;
const valor2= 2;
const valor3= 3;


const porcentaje1= 0.008;
const porcentaje2 = 0.013;
const porcentaje3 = 0.017;






switch (cTiempo) {
    case "1": 
        
         showTiempo.innerText = "12 meses";
         showInteres.innerText ="0.8%";
   var ganancia = (cMonto * porcentaje1)*12;
    var total = parseInt(cMonto) + parseInt(ganancia);
        intereses.innerText = total;
        ganancias.innerText = ganancia;
        break;
    case "2":
            showTiempo.innerText = "24 meses";
            showInteres.innerText ="1.3%";
    ganancia =(cMonto * porcentaje2)*24;
    total = parseInt(cMonto) + parseInt(ganancia);
        intereses.innerText = total;
        ganancias.innerText = ganancia;

        
        break;
    case"3":
            showTiempo.innerText = "36 meses";
            showInteres.innerText ="1.7%";
         ganancia = (cMonto * porcentaje3)*36;
        total = parseInt(cMonto) + parseInt(ganancia);
        intereses.innerText = total;
        ganancias.innerText = ganancia;
        break;

    }

}


