window.onload= function(){
    var boton = document.getElementById('boton');
    boton.addEventListener('click', cambiarXML);
    

}

var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cambiarXML(){
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", this.value)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                    var contenido = document.getElementById('contenido');
                    contenido.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}