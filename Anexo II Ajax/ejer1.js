window.onload=function(){
    document.getElementById("boton").onclick = abrir;
  }
  function abrir() {
    //Recoger datos del formulario:
    reId = document.getElementById("id").value;
    reNombre = document.getElementById("nombre").value;
    reApellido = document.getElementById("apellido").value;
    reMail = document.getElementById("mail").value;
    reTelefono = document.getElementById("telefono").value;

    
    //Escribir la url para enviar los datos anteriores:
    ruta = "ejer1.php"; //ruta del archivo
    envio1 = "envioId=" + reId; //datos email
    envio1 += "envioNombre=" + reNombre; //datos email
    envio1 += "envioApellido=" + reApellido; //datos email
    envio1 += "envioMail=" + reMail; //datos email
    envio1 += "envioTelefono=" + reTelefono; //datos email
    datos = ruta + "?" + envio1  //url para enviar
   
    //Esta es la parte de Ajax para enviar los datos del formulario
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } 
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("mostrar");
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(datos);
    }
  }