$(document).ready(function(e) {
    $("#parrafo").mouseover(function() {
        $("#parrafo").addClass("tamanyo");
    })
    $("#parrafo").mouseout(function() {
        $("#parrafo").addClass("tamanyoNormal");
    })
})