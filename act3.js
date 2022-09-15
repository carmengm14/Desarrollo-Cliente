//pedimos al user insertar 5 numeros
var suma = 0;
var array = [7,8,2,9,10];
for (var i = 0; i <= array.length; i++) {
  if (array[i] > 8) {
    suma += array[i];
  }
}
alert("La suma de tus numeros es: " + suma);

