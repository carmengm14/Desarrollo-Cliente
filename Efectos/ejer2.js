$(document).ready(function(){
    $("#texto").hide();

    $("#saludo").click(function(){
        $("#texto").fadeIn();
    })
    $("#despedida").click(function(){
        $("#texto").fadeOut();
    })
});