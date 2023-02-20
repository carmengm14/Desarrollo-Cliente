$(document).ready(function(){   
    $('#btn').on('click', function(){
        $('p').mensaje({color:'blue', fontFamily: 'sans-serif', size: '50px'});
    })
})
$.fn.mensaje = function(options){
    let config = {
    size: "35px",
    color: "red"
    }
    $.extend(config, options);

    $(this).css("color", config.color)
    $(this).css("font-size", config.size)
}