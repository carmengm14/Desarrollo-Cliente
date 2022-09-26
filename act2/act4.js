var navegador = navigator.userAgent;
if (navegador != "msie") {
    var nueva = window.open("","pagina2","toolbar=yes,location=no,menubar=yes"+ "width=500,height=500");

    /*
    var miVentanaAltura = screen.height;    
    var miVentanaAnchura = screen.width;

    if (miVentanaAltura != 500, miVentanaAnchura != 500) {
        miVentana.resizeTo(500, 500);
    }
    */

    
}else{
    var nueva = window.open("","pagina2","width=500,height=500");


}