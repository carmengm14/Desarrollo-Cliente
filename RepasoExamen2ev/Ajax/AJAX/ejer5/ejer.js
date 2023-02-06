window.onload= function(){
    document.getElementById('boton').onclick = sacarPHP;
}

var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacarPHP(fichero, Lugarcontenedor){
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById("contenido");
        XMLHttpRequestObject.open("GET", "fichero.php")

        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var resultado = XMLHttpRequestObject.responseText;
                contenedor.innerHTML = resultado;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

