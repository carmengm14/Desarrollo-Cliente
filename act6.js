var cadena = prompt("Escribe una cadena");
var contador = 0;
document.write("La longitud de la cadena es " + cadena.length + " caracteres <br>");
document.write("La cadena en mayusculas es: " + cadena.toUpperCase() + "<br>");
document.write("La cadena en minusculas es: " + cadena.toLowerCase() + "<br>");
document.write("CADENA NORMAL" + "<br>");

var palabras = cadena.split(" ");
var palabrasAlReves = palabras.reverse();


for (let i = 0; i < palabras.length; i++) {
    document.write(palabras[i] + "<br>");
}

document.write(cadena + "<br>");
document.write("CADENA AL REVES" + "<br>");

for (let i = 0; i < palabras.length; i++) {
    document.write(palabrasAlReves[i] + "<br>");
}


