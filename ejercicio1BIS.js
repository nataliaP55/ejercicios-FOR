/*
Ejercicio 1
Crear una pagina que permita al usuario modificar a una opcion 
para ser opcion VIP entre 7 opciones

ejercicio 1 con iteración de FOR
*/
let numeroIngresado = "numero por def";
const OPCIONES_VIP = 7;


function vip () {
    numeroIngresado = document.querySelector('#opcion_vip').value;
    document.querySelector(`#op${numeroIngresado}`).innerHTML= `  
    Opción ${numeroIngresado} VIP
        
        `;
  
}

for (let i = 1 ; i <= OPCIONES_VIP ; i ++){
    document.querySelector(`#lista_suscripciones`).innerHTML+= `  
    <option id = "op${i}">Gatito ${i} </option>


    `;
}