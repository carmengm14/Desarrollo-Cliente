let numeros : number[] = [1,2,5,7,101];
let contador: number = 0;
let resultado: number = 0;

numeros.forEach(function(numero){
    if(numero > 100)
        contador ++;
    resultado = resultado + numero;
});
console.log("La suma es:", resultado , "y hay: " , contador , "numeros > 100");
