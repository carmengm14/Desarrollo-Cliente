function aumentarTamano(evnt){
    document.getElementById("primerParrafo").addEventListener("onmouseover", aumentarTamano())}

function disminuirTamano(evnt){
    evnt.style = "font-Size: 12pt;";
}