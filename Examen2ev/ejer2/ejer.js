$(document).ready(function() {

    $("#Extras").click(function() {
        if ($(this).prop('checked')) {
            var contenedor = "<br><br><div id='contenedor'></div>";
            $("body").append(contenedor);
            $("#contenedor").append("Precio: <input type='text' id='precioFinal'>");
        }else {
            $("#contenedor").remove();
        }          
    });     

    $("input").click(function(){
        if( $(this).val() == 'Marruecos' ) {
            $("#precioFinal").val(600);
        }else {
            $("#precioFinal").val(1000);
        }
    });

    $("#Extras").click(function() {
        if ($(this).prop('checked')) {
            $.ajax({
            url: "mensaje.txt",
            dataType: "text",
                success : function (data) {
                        $("#infoMensaje").html(data);
                        $("#infoMensaje").css({'border': '5px solid red'});
                        $("#infoMensaje").animate({
                            'border-width': '20px' ,
                            'font-size': '25px'}); 
                }
            })
        };
    });


});
