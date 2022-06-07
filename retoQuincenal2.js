let numeroIngresado = "numero por def";
const NUMERO_CASILLAS = 20;


for (let i = 1; i <= NUMERO_CASILLAS; i++) {
    document.querySelector(`#casilla`).innerHTML += `
    <option id = "${i}">Casilla ${i}  </option>

    `;

}

function generar() {
    
}
