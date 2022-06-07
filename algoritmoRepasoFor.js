/* 
construir una página que permita recibir el nombre, año de nacimiento entre 1922 y 2004
una vez el usuario ingrese la información y la envíe debería mostrarse un mensaje
informando el nombre y la edad aproximada del usuario

HTML:
-recibir un nombre
-recibir año de nacimiento
- botón enviar
-mostrar mensaje sobre nombre y edad del usuario

JS
- calcular edad aproximada con el año de nacimiento ingresado
- hacer automática la lista de años (estructura de iteración)
- hacer que el botón muestre la información

*/

const ANIO_ACTUAL = 2022;
const ANIO_MIN = 1922;
const ANIO_MAX = 2004; 




for (let opcionAnio = ANIO_MAX; opcionAnio >= ANIO_MIN; opcionAnio--) {
    document.querySelector("#lista_anios").innerHTML += `
    <option> ${opcionAnio} </option>
    `;
    
}
/*
calcula edad dependiendo del año recibido y muestra en la página el resultado de la edad
calculada y el nombre del usuario.
*/
function calcularEdad() {
    let nombreRecibido = document.querySelector("#nombre").value;
    let anioIngresado = "anio por def";
    let edad = "edad def";

    edad = ANIO_ACTUAL - anioIngresado;

    document.querySelector ("#respuesta").innerHTML = `
    <h2> ${nombreRecibido} tenes ${edad} años </h2>

    `;
}


    