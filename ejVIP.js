/*
Ejercicio 1
Crear una pagina que permita al usuario modificar a una opcion 
para ser opcion VIP entre 7 opciones

*/

let numeroIngresado = "numero por def";


function generar () {
    numeroIngresado = document.querySelector('#opcion_vip').value;
    document.querySelector(`#lista_suscripciones`).innerHTML= `  
        
        
        `;
    for(let i = 0 ; i < numeroIngresado ; i ++){
        document.querySelector(`#opcion_vip`).innerHTML+= `  
        <option>Opcion ${i}</option>
        
        `;
        
         
    }
}