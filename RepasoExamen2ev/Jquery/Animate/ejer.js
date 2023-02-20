
function funcion() {
    var XMLHttpRequestObject = false;
    XMLHttpRequestObject = new XMLHttpRequest();
    if (XMLHttpRequestObject) {
        var contenido = document.getElementById('contenedor');
        XMLHttpRequestObject.open("GET", "datos.txt")
        XMLHttpRequestObject.onreadystatechange = function () {
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenido.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

$(document).ready(function () {
    $("body").append("<div id='contenedor'></div>");
    $("#contenedor").animate({ 'color': "green" },function(){
        window.onload = funcion();
    });
    $("p").animate({ 'color': "green", 'font-size': "50px" });
});