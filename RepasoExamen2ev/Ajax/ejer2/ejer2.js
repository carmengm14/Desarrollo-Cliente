window.onload= function(){
    var boton = document.getElementById('imagen1');
    boton.addEventListener('click', cambiarDeImagen);
    var boton2 = document.getElementById('imagen2');
    boton2.addEventListener('click', cambiarDeImagen);

}

var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cambiarDeImagen(){
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", this.value)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                    var contenido = document.getElementById('contenido');
                    contenido.src = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}