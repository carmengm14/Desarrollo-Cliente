$(document).ready(function() {
    $("#mostrar").click(function(){
        $("#imagen").fadeIn();
    });

    $("#fundido").click(function(){
        $("#imagen").fadeOut(1200);
    });

    $("#deslizamiento").click(function(){
        $("#imagen").slideUp(1200).slideDown(800);
    });

    $("#ocultar").click(function(){
        $("#imagen").hide(800);
    });

});