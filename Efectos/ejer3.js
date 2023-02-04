$(document).ready(function(){
    $("#iniciar").click(function(){
        $("#cuadradito").animate({left: "230px"}, 1500, function(){
            $("#cuadradito").animate({top: "230px"},1500,function(){
                $("#cuadradito").animate({left: "0px"},1500,function(){
                    $("#cuadradito").animate({top: "0px"},1500);
                })
            })
        });
    });
    $("#parar").click(function(){
        $("#cuadradito").stop(true,false);
    });
});