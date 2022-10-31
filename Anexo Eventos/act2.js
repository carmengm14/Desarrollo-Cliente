function evitarFuncionLink(evento) {
    evento.preventDefault();
}

window.onload = function(){
    document.getElementById("URL1").onclick = evitarFuncionLink;
}