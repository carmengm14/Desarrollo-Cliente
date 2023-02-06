$(document).ready(function(){
    $("#btnDesaparecer").click(function(){
        $("p").desaparecer();
    });
});

jQuery.fn.desaparecer = function() {
    this.each(function(){
       $(this).css("display", "none");
    });   
    return this;
 }; 

/*
jQuery.fn.desaparecer = function(){
    $("#desaparecer").click(function(){
        $("p").css("display", "none");
    });
}*/