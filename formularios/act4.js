window.onload = function(){
    var estilos = document.getElementById("formulario");
    estilos.onchange = cambiarEstilo;
}

function cambiarEstilo(){
    var parrafo = document.getElementById("parrafito");

    if (document.getElementById("negrita").checked) {
        parrafo.style.fontWeight = "bold";
    }else{
        parrafo.style.fontWeight = "";
    }

    if (document.getElementById("cursiva").checked) {
        parrafo.style.fontStyle = "italic";
    }else{
        parrafo.style.fontStyle = "";
    }
}