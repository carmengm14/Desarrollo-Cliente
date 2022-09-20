var navegador = navigator.appCodeName;
if (navegador != "msie") {
    document.write("Operacion no permitida con este navegador")
 
}else{
    var miVentana;
    var anchura = 500;  anchura = parseInt(anchura);
    var altura     = 500;  altura = parseInt(altura);
    
    function abrirVentana()
    {
    miVentana = window.open("", "ventanaHija", "width=500, height=500, resizable");
    }
    
           function redimensionarVentana()
    {
    anchura = anchura + 100;
    altura = altura + 100;
    
    miVentana.resizeTo(anchura,  altura);
    } 
}