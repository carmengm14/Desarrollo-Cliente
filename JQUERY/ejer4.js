$(document).ready(function(e) {
    $("input[type=checkbox]").click(function() {
        var numero1 = parseInt($("#campoTexto1").val());
        var numero2 = parseInt($("#campoTexto2").val());
        var suma = numero1 + numero2;
  

        if ($("input[type=checkbox]").prop("checked")) {
            $("#resultado").css("display", "block"); 
            $("#resultado").val(suma);
        }else{
            $("#resultado").css("display", "none"); 
        }

    })
})