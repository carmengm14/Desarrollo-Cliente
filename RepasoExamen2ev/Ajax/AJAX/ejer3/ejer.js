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

/**
 * SI HUBIESE MÁS DE UN DATO EN EL XML SE PONDRIA LA FUNCION ASI:
 * function cargarXML() {
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", "./datos.xml")
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var contenedor = document.getElementById('contenedor')
                var resultado= "";
                var xml = XMLHttpRequestObject.responseXML;
                var agendas = xml.getElementsByTagName('agenda')
                for (let i = 0; i < agendas.length; i++) {
                    var agenda = agendas[i]
                    var nombre = agenda.getElementsByTagName('nombre')[0].firstChild.nodeValue
                    var apellidos = agenda.getElementsByTagName('apellidos')[0].firstChild.nodeValue
                    var telf = agenda.getElementsByTagName('telf')[0].firstChild.nodeValue
                    var email = agenda.getElementsByTagName('email')[0].firstChild.nodeValue

                    resultado = "<p>"+ nombre + " "+ apellidos + " "+ telf + " "+ email +"</p>"                    
                }
                contenedor.innerHTML = resultado;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
*/