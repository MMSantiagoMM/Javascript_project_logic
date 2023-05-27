function aniadirTexto() {
    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar_texto");

    mostrar.innerHTML = texto.value;
}
function enviarNums() {
    var num_one = parseInt(document.getElementById("numero_1").value);
    var num_two = parseInt(document.getElementById("numero_2").value);
    var retornar = document.getElementById("retornar_texto");


    if (num_one && num_two) {
        if (num_one >= num_two) {
            if (num_one === num_two) {
                retornar.innerHTML = " Los numeros son iguales"
            } else {
                retornar.innerHTML = num_one + " es mayor"
            }
        } else {
            retornar.innerHTML = num_two + "es mayor"
        }
    }else {
        retornar.innerHTML = "Falta ingresar uno o ambos números "
    }



}