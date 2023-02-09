window.onload= function(){
    var XMLHttpRequestObject = false;
    XMLHttpRequestObject = new XMLHttpRequest();
    
        if(XMLHttpRequestObject){
            XMLHttpRequestObject.open("GET", 'imagen.txt')
            XMLHttpRequestObject.onreadystatechange = function(){
                if (XMLHttpRequestObject.readyState == 4 &&
                    XMLHttpRequestObject.status == 200) {
                        var contenido = document.getElementById('imagenId');
                        contenido.src = XMLHttpRequestObject.responseText;
                }
            }
            XMLHttpRequestObject.send(null);
        }
}

$(document).ready(function(){
    $("#boton").click(function(){
        $("#boton").cambiarColor();
    });
    $("#imagenId").hover(function(){
        $("#imagenId").fadeOut(1000,function(){
            $("#imagenId").fadeIn();
        });
    });
})

jQuery.fn.cambiarColor = function() {
        $("#parrafito").animate({ 'background-color': "green" });
    return this;
};
    