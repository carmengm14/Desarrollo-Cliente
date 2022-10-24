window.alert("ESTA PÁGINA CONTIENE UN RELOJ DIGITAL");
function mueveReloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
    horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.form_reloj.reloj.value = horaImprimible;
    setTimeout("mueveReloj()",1000)

}

window.addEventListener('beforeunload', function(e) {
  return "PÁGINA CANCELADA"  
})
/*
var bPreguntar = true;
    window.onbeforeunload = preguntarAntesDeSalir;
    function preguntarAntesDeSalir(){
      if (bPreguntar){
        alert ("PÁGINA CANCELADA");
        return "PÁGINA CANCELADA";
    }
}
*/