var navegador = navigator.userAgent;
if (navegador != "msie") {
    alert("OPERACION NO PERMITIDA EN ESTE NAVEGADOR");
       
}else{
    var nueva = window.open("","pagina2","toolbar=yes,location=no,menubar=yes"+ "width=500,height=500");


}