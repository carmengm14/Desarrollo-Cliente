var cadena = prompt("Escribe una cadena");
var contador = 0;
document.write("La longitud de la cadena es " + cadena.length + " caracteres <br>");
document.write("La cadena en mayusculas es: " + cadena.toUpperCase + "<br>");
document.write("La cadena en minusculas es: " + cadena.toLowerCase + "<br>");
document.write("CADENA NORMAL" + "<br>");
var palabras = cadena.split(" ");
document.write(palabras);
document.write("<br>");


