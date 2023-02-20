/**LA CALCULADORA */
$(function(){
    $(".val").click(function(e){
         e.preventDefault();
          var a = $(this).attr("href");
          $(".screen").append(a);
          $(".outcome").val($(".outcome").val() + a);
    });

     $(".equal").click(function(){
          $(".outcome").val(eval($(".outcome").val()));
          $(".screen").html(eval($(".outcome").val()));
     });

     $(".clear").click(function(){
          $(".outcome").val("");
          $(".screen").html("");
     });

     $(".min").click(function(){
         $(".cal").stop().animate({width: "0px", height: "0px", marginLeft: "700px", marginTop: "1000px"}, 500);
        setTimeout(function(){$(".cal").css("display", "none")}, 600);
     });

     $(".close").click(function(){
          $(".cal").css("display", "none");
     });

    /*TEXTO ESCRITO EN JS*/
     $("#contenedor").html("<br><br> <center> ESTE TEXTO ESTA ESCRITO EN EL JS </center>");
     $("#contenedor").css("color","green");
     /*FIN DEL TEXTO*/

     $("#btnParpadear").click(function(){
        $("p").parpadea();
    });



    /*WIDGET*/
    $( document ).tooltip();
    /**FIN DEL WIDGET */

})
/**FIN DE LA CALCULADORA */


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

