// formulario
let formulario = document.querySelector('form');

// resultado
let resultado = document.querySelector('.resultado');

// errores
let errorNombre = document.querySelector('.errorNombre');
let errorAsunto = document.querySelector('.errorAsunto');
let errorMensaje = document.querySelector('.errorMensaje');

const patron = /[a-zA-Z]/gim;

let nombreUsuario = (e) =>{
    e.preventDefault();

    let nombre = document.querySelector('#nombre'); //input nombre
    let asunto = document.querySelector('#asunto'); //input asunto
    let mensaje = document.querySelector('#mensaje'); //textarea mensaje
    
    // nombre
    if ((nombre.value.length, asunto.value.length, mensaje.value.length) >= 2 && (nombre.value.length, asunto.value.length, mensaje.value.length) <= 10 && (patron.test(nombre.value,asunto.value,mensaje.value)) ) {
        resultado.innerHTML = `<p>Mensaje Enviado Con Exito</p>`;
        errorNombre.innerHTML = ``;
        errorAsunto.innerHTML = ``;
        errorMensaje.innerHTML = ``;
    } else {
        alert("Debe ingresar un nombre con mas de una letra");
        resultado.innerHTML = ``;
        errorNombre.innerHTML = `*El mensaje es requerido`;
        errorAsunto.innerHTML = `*El mensaje es requerido`;
        errorMensaje.innerHTML = `*El mensaje es requerido`;
        
    }
}

formulario.addEventListener('submit',nombreUsuario);