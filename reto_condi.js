function aniadirTexto() {
    var texto = document.getElementById("texto");
    var mostrar = document.getElementById("mostrar_texto");

    mostrar.innerHTML = texto.value;
}
function enviarNums() {
    var num_one = parseFloat(document.getElementById("numero_1").value);
    var num_two = parseFloat(document.getElementById("numero_2").value);
    var num_three = parseFloat(document.getElementById("numero_3").value)
    var retornar = document.getElementById("retornar_texto");

    //Hacer una solución que lea tres números y luego los imprima ascendentemente.

    if (num_one > num_two && num_one > num_three) {
        if (num_two > num_three) {
            retornar.innerHTML = retornar.innerHTML = num_one + " " + num_two + " " + num_three
        }else {
            retornar.innerHTML = num_one + " " + num_three + " " + num_two
        }
    }else {
        if (num_two > num_one && num_two > num_three) {
            if (num_one > num_three) {
                retornar.innerHTML = num_two + " " + num_one + " " + num_three
            } else {
                retornar.innerHTML = num_two + " " + num_three + " " + num_one
            }
        } else {
            if (num_three > num_one && num_three > num_two) {
                if (num_one > num_two) {
                    retornar.innerHTML = num_three + " " + num_one + " " + num_two
                } else {
                    retornar.innerHTML = num_three + " " + num_two + " " + num_one
                }
                
            }
        }
    }

}