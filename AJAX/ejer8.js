var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

function sacardatos(){
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", 'ejer8.json');
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        objeto = JSON.parse(XMLHttpRequestObject.responseText);
        lugar.innerHTML = objeto.firstName + " " + objeto.lastName;
    }

    
}
    XMLHttpRequestObject.send(null);
    }
}

window.onload = function () {
    document.getElementById('boton').onclick = sacardatos;
<<<<<<< HEAD
}
=======
}
>>>>>>> 584eacadb0e80be10115c8bc90d8d30bcfe87ee2
