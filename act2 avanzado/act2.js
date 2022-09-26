document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var clave = document.getElementById('dni').value;
    if (clave.length < 9 || clave.length > 0) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }