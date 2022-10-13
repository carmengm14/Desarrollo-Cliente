function sumar(){
    valor = parseInt(document.getElementById('numero').value);
    valor = valor + 10;
    document.getElementById('numero').value = valor;
}
function reiniciar(){
    valor = document.getElementById('numero').value;
    valor = 0;
    document.getElementById('numero').value = valor;
}