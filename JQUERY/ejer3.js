$(document).ready(function() {
    $("input[type=radio]").click(function() {
        if ($("input[type=radio]").attr("checked", true)) {
            var color = $(this).val();
        $('#texto').css("backgroundColor", color);
        }  
    })
})