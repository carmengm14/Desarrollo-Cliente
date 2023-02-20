$(document).ready(function() {
    $("#boton").click(function() {
      $.ajax({
        url: "ejer3Alert.js",
      })
  
      .done(function(texto) {
        $("#contenido").js(texto);
      })
      .fail(function() {
        $("#contenido").html("ERROR DE CARGA DEL CONTENIDO");
      })
  
    });
  });