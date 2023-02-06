$(document).ready(function(){
    $("#btnAccionar").click(function(){
        $("#btnAccionar").carrusel();
    });
    $( "#accordion2" ).accordion();
});

jQuery.fn.carrusel = function() {
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slider');
    }, 4000);
};
