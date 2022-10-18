window.onload = function(){
    var parrafo = document.getElementById('parrafo');
    
    parrafo.addEventListener("mouseover",aumentarTamano);
    parrafo.addEventListener("mouseout",disminuirTamano);

    
    function aumentarTamano(){
        texto = document.getElementById("parrafo").style = "font-Size: 16pt;";
    }
    
    function disminuirTamano(){
        texto = document.getElementById("parrafo").style = "font-Size: 12pt;";
    }
}