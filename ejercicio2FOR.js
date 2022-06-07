/*
for(let i = 0 ; i < numeroFinal ; i ++){
        document.querySelector("#lista_opciones").innerHTML+= `  
        <option>Opcion ${listado}</option>
        
        `;
        
         
    } 
*/


let numeroInicio = "num por defi";
let numeroFinal = "num por defe";
 //let listado = numeroFinal - numeroInicio; //  

function mostrar () {
    

    numeroInicio = document.querySelector("#num_inicial").value;
    numeroFinal = document.querySelector("#num_final").value;
    document.querySelector(`#lista_opciones`).innerHTML= `  
   
        `;


    for(let i = numeroInicio ; i <= numeroFinal ; i ++){
        document.querySelector("#lista_opciones").innerHTML+= `  
        <option>Opcion ${i}</option>
        
        `;
                 
    } 

   
}
