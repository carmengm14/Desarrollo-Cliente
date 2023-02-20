$(document).ready(function () {
    $("body").append("<br><br><input type='text' name='resultado' id='resultado'> <br><br> <button id='boton' style='cursor:pointer;'>Resultado</button>");
    $("#boton").click(function(){
        let valor1:string = $("#numero1").val();
        let valor2:string = $("#numero2").val();
        let resultado = parseFloat(valor1) + parseFloat(valor2);
        $("#resultado").attr('value', resultado);
    });
});
