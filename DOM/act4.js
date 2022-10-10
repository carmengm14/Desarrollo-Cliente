window.onload = function(){
    var links = document.getElementById('links');
    var imagenes = document.getElementById('imagen');

    links.addEventListener("click",contarLinks);
    imagenes.addEventListener("click",contarImagenes);

    
    function contarLinks(){
        var contador = document.getElementsByTagName('a');
        alert("Hay " + contador.length + " links");
    }
    function contarImagenes(){
        var contador = document.getElementsByTagName('img');
        alert("Hay " + contador.length + " imagenes");
    }
}

