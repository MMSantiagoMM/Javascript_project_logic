function aniadirTexto() {
    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar_texto");

    mostrar.innerHTML = texto.value;
}
function enviarNums() {
    var num_one = parseFloat(document.getElementById("numero_1").value);
    var num_two = parseFloat(document.getElementById("numero_2").value);
    var promedio = (num_one + num_two) / 2;
    var retornar = document.getElementById("retornar_texto");

//Hacer un algoritmo que lea las estaturas de dos personas y luego me imprima el promedio de estaturas solo si este es más mayor de 1.70 
    if (promedio > 1.70) {
        retornar.innerHTML = promedio.toFixed(2);
    }else {
        retornar.innerHTML = " El promedio no es mayor a 1.70"
    }

}