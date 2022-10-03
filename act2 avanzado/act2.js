document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var clave = document.getElementById('dni').value;
    if (clave.length == 9) {
      alert('La clave es válida');
    }else{
      alert('La clave NO es válida');
    }
    this.submit();
  }