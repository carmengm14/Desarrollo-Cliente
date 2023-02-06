window.onload= function(){
}

var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacarJS(fichero, Lugarcontenedor){
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById(Lugarcontenedor);
        XMLHttpRequestObject.open("GET", fichero)

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

