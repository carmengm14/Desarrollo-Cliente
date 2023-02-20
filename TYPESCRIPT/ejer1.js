var numeros = [1, 2, 5, 7, 101];
var contador = 0;
var resultado = 0;
numeros.forEach(function (numero) {
    if (numero > 100)
        contador++;
    resultado = resultado + numero;
});
console.log("La suma es:", resultado, "y hay: ", contador, "numeros > 100");
