window.onload = function(){
    var lista = document.getElementById("colores");
    lista.onchange = cambiarColor;
}
function cambiarColor(){
    var lista = document.getElementById("colores");
    var parrafo = document.getElementById("parrafito");

    if (lista.value == "azul") {
        parrafo.style.color="#107acc";
    }else if(lista.value == "verde"){
        parrafo.style.color="#005c00";
    }else if(lista.value == "rojo"){
        parrafo.style.color="#c20000"; 
    }else{
        alert("NO PERMITIDO");
    }
        
}