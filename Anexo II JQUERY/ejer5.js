$(document).ready(function() {
    $("#boton").click(function(){
        $.getJSON("https://restcountries.com/v3.1/region/europe", function(data) {
            for (var i = 0; i < data.length; i++) {
            $("#lista-paises").append(" " + data[i].name.common + "<br>");
            }
            });
    })
    
    });