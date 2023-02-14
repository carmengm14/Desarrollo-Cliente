$(document).ready(function () {
    var valor1 = $("#numero1").val();
    var valor2 = $("#numero2").val();
    var resultado = valor1 + valor2;
    $("body").append("<br><br><input type='text' name='resultado' id='resultado'> <br><br> <button id='boton'>Resultado</button>");
    $("#boton").click(function(){
        $("#resultado").val() = resultado;
    });
});
