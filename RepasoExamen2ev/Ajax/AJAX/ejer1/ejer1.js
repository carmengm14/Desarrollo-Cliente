window.onload = function(){
    var primerLink = document.getElementById('link1');
    var segundoLink = document.getElementById('link2');

    primerLink.addEventListener('click', cargarpagContent);
    segundoLink.addEventListener('click', cargarpagContent);
}

var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarpagContent(){
    if(XMLHttpRequestObject){
        var contenido = document.getElementById('carga');
        XMLHttpRequestObject.open("GET", this.value)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenido.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}