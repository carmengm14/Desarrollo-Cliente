$(document).ready(function() {
  $("#boton").click(function() {
    $.get("ejer3.xml", function(data) {
        var contenido = "";
        $(data).find("datos").each(function() {
            contenido += $(this).text() ;
        });
        $("#contenido").html(contenido + "<br>");
    });
  });
});