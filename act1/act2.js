//pedimos al user insertar 5 numeros
var suma = 0;
var contador = 0;
for (var i = 1; i <= 5; i++) {
    var numero = parseInt(prompt("Escribe 5 numeros (" + i + ")"));
    suma += numero;
    if (numero >= 100) {
      contador++;  
    }
}
alert("La suma de tus numeros es " + suma + "\nHay " + contador + " mayores de 100");



