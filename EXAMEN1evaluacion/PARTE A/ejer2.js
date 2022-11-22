window.onload = function(){
    var texto = document.getElementsByName("enlace");
    for (let i = 0; i < texto.length; i++) {
        texto[i].onmouseover = cambiarTamanyo;
        texto[i].onmouseout = cambiarTamanyo;

    }   
}

function cambiarTamanyo(elEvento) {
switch(elEvento.type) {
    case 'mouseover':
    this.style.fontSize = '20pt';
    break;
    case 'mouseout':
    this.style.fontSize = '12pt';
    break;
}
}
/*
window.onload = function(){
    var enlace = document.getElementsByTagName("a");
    enlace.onmouseover = tamanyo;
    enlace.onmouseout = tamanyo;
}
function tamanyo(elEvento){
    var todo = document.getElementById("contenedor")
    switch(elEvento.type) {
        case 'mouseover':
        todo.style.fontSize = '20pt';
        break;
        case 'mouseout':
        todo.style.fontSize = '12pt';
        break;
    }
}
*/
