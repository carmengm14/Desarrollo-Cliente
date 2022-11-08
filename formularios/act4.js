window.onload = function(){
    var estilos = document.getElementById("formulario");
    estilos.onclick = cambiarEstilo;
}

function cambiarEstilo(){
    var cogerEstilo = getElementByName("estilos");
    var parrafo = getElementById("parrafito");
/*
    for (let i = 0; i < cogerEstilo.length; i++) {
        if (cogerEstilo[i].cheked) {
            parrafo.style.fontWeight = "bold";
        }else{
            parrafo.style.fontWeight = "";
   
        }

        if (cogerEstilo[i].cheked) {
            parrafo.style.fontStyle = "italic";
        }else{
            parrafo.style.fontStyle = "";
   
        }
    }
*/
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