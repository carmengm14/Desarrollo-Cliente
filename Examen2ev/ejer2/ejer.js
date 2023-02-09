$(function() {
    $("#Extras").click(function() {
        if ($(this).prop('checked')) {
            var contenedor = "<br><br><div id='contenedor'></div>";
            $("body").append(contenedor);
            $("#contenedor").append("<center> PRECIO:<input type='text' id='precioFinal' class='cajaPrecio'> </center>");
        }else {
            $("#contenedor").remove();
        }          
    });     
    $("input").click(function(){
        if( $(this).val() == 'Marruecos' ) {
            $("#precioFinal").val(600 + "€");
        }else {
            $("#precioFinal").val(1000 + "€");
        }
    });
    $("#Extras").click(function() {
        if ($(this).prop('checked')) {
            $.ajax({
            url: "mensaje.txt",
            dataType: "text",
                success : function (data) {
                        $("#infoMensaje").html(data);
                        $("#infoMensaje").css({'border': '5px solid red','background-color':'black', 'padding':'10px'});
                        $("#infoMensaje").animate({'border-width': '5px', 'font-size': '25px'}); 
                }
            })
        };
    });


});
