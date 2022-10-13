document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var clave = document.getElementById('dni').value;
    if (clave.length == 9) {
      document.write('La clave es válida');
    }else{
      document.write('La clave NO es válida');
    }
    this.submit();
  }