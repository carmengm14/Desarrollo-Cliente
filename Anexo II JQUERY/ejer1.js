$(document).ready(function() {
    $.ajax({
        url: "ejer1.txt",
        success: function(texto) {
          $("#contenido").html(texto);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $("#error").html("Error: " + textStatus + " " + errorThrown);
        }
      });
});