window.onload = function(){
var aficion = document.getElementById("aficion");
var observaciones = document.getElementById("observaciones");

document.getElementById("formulario").onsubmit = validarEnviar;
document.getElementById("formulario").onreset = resetear;

aficion.onchange = seleccion;
observaciones.oninput = maximocaracteres;
}
function seleccion(){
    var indice= "";
    var nombre = "";
    //getElementsByName coge mas de uno haciendo un array mientras que el getElementById solo coge el elemento
    var nombresAficion = document.getElementsByName("opcionaficion");
    var aficion = document.getElementById("aficion").value;

    for (let i = 1; i < nombresAficion.length; i++) {
        if (nombresAficion[i].value == aficion) {
            indice = indice +i;
            nombre = nombresAficion[i].value;
        }
    }

    alert("La longitud de tu lista es de " +  nombresAficion.length + "\n"
    + "El índice seleccionado es el " + indice + "\n"
    + "El valor del índice seleccionado es " + nombre);
}

function maximocaracteres(){
    var observaciones = document.getElementById("observaciones").value;
    if (observaciones.length == 150) {
        alert("HAS LLEGADO AL MÁXIMO DE CARÁCTERES");
    }
}

function validarEnviar(event){
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;

    if (dni.length == 0 ) {
        alert("El campo DNI no puede estar vacío");
        event.preventDefault();
    }else if(telefono.length != 9){
        alert("El teléfono solo puede tener 9 dígitos");
        event.preventDefault();
    }else{
    this.submit;
    }
}

function resetear(){
    this.reset;
}