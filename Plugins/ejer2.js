$(document).ready(function(){
    $("#btnParpadear").click(function(){
        $("p").parpadea();
    });
});

jQuery.fn.parpadea = function() {
    this.each(function(){
        $(this).fadeOut(250, function(){
          $(this).fadeIn(250, function(){
            $(this).css("color", "red");
            $(this).fadeOut(250, function(){
                $(this).fadeIn(250);
            });
          });
       });
    });
    return this;
 }; 