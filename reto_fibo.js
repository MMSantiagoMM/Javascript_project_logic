function aniadirTexto() {
    let text_one = document.getElementById("texto").value;
    let escribir = document.getElementById("mostrar_texto");
    escribir.innerHTML = text_one;
}
//Serie de Fibonacci
function enviarDTS() {
    let num = parseInt(document.getElementById("numero").value);
    let devolver = document.getElementById("retornar");
    let num_1 = 0;
    let num_2 = 1;
    let num_3 = 0;
    for (let i = 0; i < num; i++) {
        num_3 = num_1 + num_2;
        devolver.innerHTML += num_3 + " ";
        num_1 = num_2;
        num_2 = num_3;

    }
}