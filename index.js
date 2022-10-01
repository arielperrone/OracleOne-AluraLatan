// CAPTURA -----------------------------
const boton_1 = document.getElementById('boton_1');
const boton_2 = document.getElementById('boton_2');
const boton_3 = document.getElementById('boton_3');
const div_1 = document.getElementById('div_1');
const div_2 = document.getElementById('div_2');
const div_3 = document.getElementById('div_3');

// ESCUCHA -------------------------------
boton_1.addEventListener('click',cambiar1);
boton_2.addEventListener('click',cambiar2);
boton_3.addEventListener('click',cambiar3);

// FUNCIONES --------------------------------
function cambiar1(){
    boton_1.removeAttribute('class','versiones_0');
    div_1.removeAttribute('class','versiones_1')
    boton_1.setAttribute('class', 'versiones_1');
    div_1.setAttribute('class','alineacion_divs')
}

function cambiar2(){
    boton_2.removeAttribute('class','versiones_0');
    div_2.removeAttribute('class','versiones_1')
    boton_2.setAttribute('class', 'versiones_1');
    div_2.setAttribute('class','alineacion_divs')
}

function cambiar3(){
    boton_3.removeAttribute('class','versiones_0');
    div_3.removeAttribute('class','versiones_1')
    boton_3.setAttribute('class', 'versiones_1');
    div_3.setAttribute('class','alineacion_divs')
}

