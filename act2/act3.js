document.write("<h1>"+"Bienvenido a mi página"+ "</h1>")
document.write("Tu Navegador es: "+ navigator.userAgent + "<br>");
var confirmacion = window.confirm("CONTINUAR");
if (confirmacion == true) {
    document.write("CONTINUAMOS");
}
