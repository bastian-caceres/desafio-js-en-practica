// resultado
let resultado = document.querySelector('.resultado');

// validar que solo sea numeros
const patron = /[0-9]/gim

//boton 
let btnSuma = document.querySelector("#btn-sumar");
let btnResta = document.querySelector("#btn-restar");

// valores
let valor1 = document.querySelector('#valor1');
let valor2 = document.querySelector('#valor2');

function suma() {
    var sumFin = parseInt(valor1.value) + parseInt(valor2.value)
    // console.log(sumFin)
    resultado.innerHTML = `${sumFin}`;
}

function resta() {
    var sumFin = parseInt(valor1.value) - parseInt(valor2.value)
    if (sumFin < 0) {
        resultado.innerHTML = `0`;
    }else{
        // console.log(sumFin)
        resultado.innerHTML = `${sumFin}`;
    }
    
}

btnSuma.addEventListener('click', suma);
btnResta.addEventListener('click', resta);

