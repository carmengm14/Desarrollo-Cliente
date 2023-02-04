$(document).ready(function() {
    $("#boton").click(function() {
      $.ajax({
        url: "ejer1.txt",
      })
      .done(function(texto) {
        $("#contenido").html(texto);
      }
    );
})});