var navegador = navigator.userAgent;
if (navegador != "msie") {
    document.write("Operacion no permitida con este navegador")
    var miVentanaAltura = screen.height;    
    var miVentanaAnchura = screen.width;

    if (miVentanaAltura != 500, miVentanaAnchura != 500) {
        miVentana.resizeTo(500, 500);
    }

    
}else{
    var miVentanaAltura = screen.height;    
    var miVentanaAnchura = screen.width;

    if (miVentanaAltura != 500, miVentanaAnchura != 500) {
        miVentana.resizeTo(500, 500);
    }

}