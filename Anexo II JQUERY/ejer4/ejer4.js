$(document).ready(function(){  	

    $("#enviar").click(function(){
        var getss = $.get( "ejer4.php", $("form").serialize())

        getss.done(function(resultado){
            $("#resultado12").html(resultado);
        })
        getss.fail(function(){
            alert("ERROR");
        });
    })   
      
});