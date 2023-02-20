$(document).ready(function(){
    $("#iniciar").click(function(){
        $("#cuadradito").animate({left: "230px" , "background-color": "blue"}, 1500, function(){
            $("#cuadradito").animate({top: "230px","background-color": "red"},1500,function(){
                $("#cuadradito").animate({left: "0px", "background-color": "purple"},1500,function(){
                    $("#cuadradito").animate({top: "0px", "background-color": "yellow"},1500);
                })
            })
        });
    });
    $("#parar").click(function(){
        $("#cuadradito").stop(true,false);
    });
});