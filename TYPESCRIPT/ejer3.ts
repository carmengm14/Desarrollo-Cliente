$(document).ready(function () {
    let valor1 = $("#numero1").val();
    let valor2 = $("#numero2").val();
    let resultado = valor1 + valor2;
    $("body").append("<br><br><input type='text' name='resultado' id='resultado'> <br><br> <button id='boton'>Resultado</button>");
    $("#boton").click(function(){
        $("#resultado").val() = resultado;
    });
});
