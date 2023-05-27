function aniadirTexto() {
    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar_texto");

    mostrar.innerHTML = texto.value;
}
function enviarNums () {
    var number_one = parseInt(document.getElementById("numero_1").value);
    var number_two = parseInt(document.getElementById("numero_2").value);
    var devolver = document.getElementById("retornar_texto")

    var resultado = number_one + number_two;

    devolver.innerHTML = resultado;
}