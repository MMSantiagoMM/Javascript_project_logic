function aniadirTexto() {
    let input_text = document.getElementById("texto");
    let salida_text = document.getElementById("mostrar_texto");
    salida_text.innerHTML = input_text.value;
}
function enviarDTS() {
    let num = parseInt(document.getElementById("numero").value);
    let name = document.getElementById("nombre").value;
    let salida = document.getElementById("retornar");

    //    Elabore un diagrama que lea para un grupo de 15 personas el nombre y la edad, e imprima por cada una el nombre y un mensaje que imprima si es mayor o menor de edad.
    for (let i = 0; i < 2; i++) {
        if (num >= 18) {
            salida.innerHTML += name + " es mayor de edad"
        }else {
            salida.innerHTML += name + " no es mayor de edad"
        }
    }
    
        
}