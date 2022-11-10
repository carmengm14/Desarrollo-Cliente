/*function validarFormulario(event){
    var texto = document.getElementById("clave").value;
    if (texto.length != 4) {
        alert("TAMAÑO NO PERMITIDO");
        event.preventDefault();
    }else{

        var valoresAceptados = /^[0-9]+$/;
        var valoresAceptados2 = /^[A-Z]+$/;

        for (let i = 0; i < texto.length; i++) {
            if (texto[1].indexOf(valoresAceptados) == 0 && texto[2].indexOf(valoresAceptados)== 0 && texto[3].indexOf(valoresAceptados) == 0){
                if (texto[0].indexOf(valoresAceptados2) == 0) {
                    alert("VALIDA");
                    this.submit();
                }else{
                    event.preventDefault();
                    alert("NO ES VALIDA");
                }
             } else {
                event.preventDefault();
                alert("NO ES VALIDA");
            }
            
        }
            
    }
}
*/
verificarCLAVE = function(a){ 
    var valoresCorrectos = /^[A-Za-z]{3}[0-9]{3}$/;
    if(valoresCorrectos.test(a)){
        alert("CORRECTO");
    }else{
        valorDeElemento.preventDefault();
        alert("INCORRECTO")
    }
}