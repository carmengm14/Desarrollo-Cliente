window.onload = function(){
    var formulario = document.getElementById("formulario");
    formulario.onchange = cambiarColor;
}

/*function cambiarColor(){
    var lista = document.getElementsByName("opcioncolor");
    var parrafo = document.getElementById("parrafito");
    //accedemos al array de opcioncolor, y hacemos que si el elemnto esta seleccionado cambie de color

        if (lista[0].checked == true) {
            parrafo.style.color="#107acc";
    
        }else if(lista[1].checked == true){
            parrafo.style.color="#005c00";
    
        }else if(lista[2].checked == true){
            parrafo.style.color="#c20000";
        }     

        
}*/

function cambiarColor(){
    var lista = document.getElementsByName("opcioncolor");
    var parrafo = document.getElementById("parrafito");
    
    for (let i = 0; i < lista.length; i++) {
        
        if (lista[i].checked) {
            parrafo.style.color = lista[i].value;
            parrafo.style.backgroundColor = "#c8c8c8";
        }
    }
        
}





/*

window.onload = function () {
    document.getElementById("form").onchange = cambiarcolor;
    }
    
    function cambiarcolor() {
    for (let index = 0; index <= document.getElementsByName('color').length; index++) {
    var valor = document.getElementsByName('color')[index]
    if(valor.checked == true) {
    document.getElementById('parrafo').style.backgroundColor = valor.value
    }
    }
    }

*/