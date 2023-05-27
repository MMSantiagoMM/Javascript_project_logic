function aniadirTexto() {
    let text_input = document.getElementById("texto");
    let text_output = document.getElementById("mostrar_texto");
    text_output.innerHTML = text_input.value;
    
}
function enviarDts() {
    var name_t = document.getElementById("nombre").value;
    var salBH = parseInt(document.getElementById("salarioHora").value);
    var hours = parseInt(document.getElementById("horas").value);
    var retornar = document.getElementById("retornar_texto");

var salBruT = salBH * hours;
var salNet = 0;
if (hours <= 48) {
    salNet += salBruT + 20000;
} else {
    if ( hours <= 58){ 
        salNet += salBruT + 50000;
    } else {
        salNet += salBruT + 100000;
    }
}
if (salBH <= 5000) {
    salNet -= 10000;
}else {
    if(salBH < 8000) {
        salNet -= 20000;
    } else {
        salNet -= 50000;
    }
}
retornar.innerHTML = name_t + " el salario bruto es " + salBruT + "el salario neto es: " + salNet   ;
}
