$(document).ready(function(e) {
    $("#parrafo").append("<p id='parrafito' class='tamanyo'>Hola</p>")
    $("#parrafo").mouseover(function() {
        $("#parrafo").addClass("tamanyo");
    })
    $("#parrafo").mouseout(function() {
        $("#parrafito").removeClass("tamanyo");
        $("#parrafo").removeClass("tamanyo");

    })
})