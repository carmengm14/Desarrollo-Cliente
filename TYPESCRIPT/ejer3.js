$(document).ready(function () {
    $("body").append("<br><br><input type='text' name='resultado' id='resultado'> <br><br> <button id='boton' style='cursor:pointer;'>Resultado</button>");
    $("#boton").click(function () {
        var valor1 = $("#numero1").val();
        var valor2 = $("#numero2").val();
        var resultado = parseFloat(valor1) + parseFloat(valor2);
        $("#resultado").attr('value', resultado);
    });
});
