function aniadirTexto() {
    let input_text = document.getElementById("texto");
    let salida_text = document.getElementById("mostrar_texto");
    salida_text.innerHTML = input_text.value;
}
function enviarDTS() {
    let num = parseInt(document.getElementById("numero").value);
    let salida = document.getElementById("retornar")
    let serie =4;
    //    1. Elaborar un diagrama que imprima los primeros 15 términos de la siguiente serie de números:
    //4 - 8 - 12 - 16 - 20 - 24 .........
    for (let i = 0; i < num; i++){
        salida.innerHTML += serie + " ";
        serie += 4;

    }
    
        
}