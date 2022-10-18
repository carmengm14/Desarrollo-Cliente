function cambiarTamano(evento){
    var event = evento || window.event;
    switch(event.type){
        case 'mouseover':
            this.style = "font-Size: 16pt;";
            break;
        case 'mouseout':
            this.style = "font-Size: 12pt;";
    }
    
}

window.onload = function(){
       document.getElementById("parrafo").onmouseover = cambiarTamano;
       document.getElementById("parrafo").onmouseout = cambiarTamano;
}

