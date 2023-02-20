$(document).ready(function() {
    $("#boton").click(function() {
      var nombre = $('#nombre').val();
      var apellidos = $('#apellidos').val();
      $.post('ejer4.php', {nombre1: nombre, apellidos1: apellidos}, function(resultadoDevuelto) {
        $("#contenido").html(resultadoDevuelto);
      });
    })
  });