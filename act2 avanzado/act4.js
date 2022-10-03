function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

var numero = prompt("Escribe un numero");
var numeroAleatorio = random(1,10);

if (numero != numeroAleatorio) {
    alert("NO HAS ACERTADO, EL NUMERO ERA: " + numeroAleatorio);
}else{
    alert("FELICIDADES HAS ACERTADO EL NUMERO");
}