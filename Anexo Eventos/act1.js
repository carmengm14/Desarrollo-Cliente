window.onload = function(){

    document.getElementById("formulario").onsubmit = cancelarEvento;
}

function cancelarEvento(evento) {

    var c1 = document.getElementById("input1");
    var c2 = document.getElementById("input2");
    var c3 = document.getElementById("input3");

    if (c1.value == "" || c2.value == "" || c3.value == "") {
        alert("HAY CAMPOS VACIOS");
        evento.preventDefault();
    }else
    {
        this.submit;
        //document.getElementById("formulario").submit; ---> se pone esto si no pones el this.submit
    }
}