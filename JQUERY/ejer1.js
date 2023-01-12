$(document).ready(function() {
    var coloresDivs = $("div");
    var nDivs = $("div").length;
    alert("Hay " + nDivs + " capas");

    cambiarColor(coloresDivs);

    function cambiarColor(color){
        color.css("color", "green")
    }
})