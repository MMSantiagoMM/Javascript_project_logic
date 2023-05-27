function aniadirTexto() {
    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar_texto");

    mostrar.innerHTML = texto.value;
}
function enviarNums() {
    var num_one = parseFloat(document.getElementById("numero_1").value);
    var num_two = parseFloat(document.getElementById("numero_2").value);
    var num_three = parseFloat(document.getElementById("numero_3").value)
    var promedioNotas = (num_one + num_two + num_three) / 3;
    var retornar = document.getElementById("retornar_texto");

//Elaborar un algoritmo que lea las tres notas de un estudiante e imprima si gano o no la materia
    
    if (promedioNotas >= 3) {
        retornar.innerHTML = "Ganó la materia";
    }else {
        retornar.innerHTML = "Perdió la materia";
    }

}