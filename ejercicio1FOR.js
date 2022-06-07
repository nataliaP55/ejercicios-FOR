/*
Ejercicio 1
Crear una pagina que permita al usuario modificar a una opcion 
para ser opcion VIP entre 7 opciones

ejercicio 1 sin iteración FOR, repetición de opciones en html
*/

let numeroIngresado = "numero por def";
/*
que modifique la opción numérica a usuario vip

*/

function vip () {
    numeroIngresado = document.querySelector('#opcion_vip').value;
    document.querySelector(`#op${numeroIngresado}`).innerHTML= `  
         Opción ${numeroIngresado} VIP 
        
        `;
  /*   for(let i = 0 ; i < numeroIngresado ; i ++){
        document.querySelector(`#opcion_vip`).innerHTML+= `  
        <option>Opcion ${i}</option>
        
        `;
        
         
    } */
}