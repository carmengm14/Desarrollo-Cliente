window.onload= function(){
    document.getElementById('boton').onclick = sacarJS;
}


var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacarJS(){
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById("contenido");
        XMLHttpRequestObject.open("GET", "fichero.js")

        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                  var resultado = eval(XMLHttpRequestObject.responseText);
                contenedor.innerHTML(resultado);
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

