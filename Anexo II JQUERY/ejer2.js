$(document).ready(function() {
  $("#boton").click(function() {
    $.ajax({
      url: "ejer2.php",
    })

    .done(function(texto) {
      $("#contenido").html(texto);
    })
    .fail(function() {
      $("#contenido").html("ERROR DE CARGA DEL CONTENIDO");
    })

  });
});