function aniadirTexto() {
    let tex = document.getElementById("texto").value;
    let blanc = document.getElementById("mostrar_texto");
    blanc.innerHTML = tex;
}
//Imprimir si un numero es primo o no
function enviarDTS(){
    let num = parseInt(document.getElementById("numero").value);
    let devo = document.getElementById("retornar");
    let sw = 0;
    let i = 2;
    while (i < num && sw == 0) {
        if (num % i == 0) {
            sw = 1;
        } else {
            i++;
        }
        if (sw == 0) {
            devo.innerHTML = num + " Sí es un número primo"
        } else {
            devo.innerHTML = num + " No es un número primo"
        }
    }
}