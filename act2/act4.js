var navegador = navigator.appCodeName;
if (navegador != "msie") {
    document.write("Operacion no permitida con este navegador")

}else{
    var miVentanaAltura = screen.height;    
    var miVentanaAnchura = screen.width;
    anchura = 500;
    altura =  500;

    if (miVentanaAltura != 500, miVentanaAnchura != 500) {
        miVentana.resizeTo(anchura, altura);
    }

}