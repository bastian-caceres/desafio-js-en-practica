// caja
let caja = document.querySelector('#caja');

//   variable colores
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");


// asocia la variable al color 
btn1.addEventListener('click', ()=> {
    caja.style = "background-color: #e53e3e; width:100%; height: 100%";
});
btn2.addEventListener('click', ()=> {
    caja.style = "background-color: #dd6b20; width:100%; height: 100%";
});
btn3.addEventListener('click', ()=> {
    caja.style = "background-color: #faf089; width:100%; height: 100%";
});
btn4.addEventListener('click', ()=> {
    caja.style = "background-color: #48bb78; width:100%; height: 100%";
});
btn5.addEventListener('click', ()=> {
    caja.style = "background-color: #d53f8c; width:100%; height: 100%";
});
btn6.addEventListener('click', ()=> {
    caja.style = "background-color: #e53e3e; width:100%; height: 100%";
});