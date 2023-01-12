$(document).ready(function(){
    $("#imagen").fadeOut(2000, function(){
        $("#imagen").slideDown(3000, function(){
            $("#imagen").slideUp(2000)
        })
    })
})