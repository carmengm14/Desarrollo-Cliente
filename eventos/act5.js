window.onload = function () {
  document.getElementById("texto").onkeypress = validarFormulario
}

function validarFormulario(event) {
  var elemento = event;
  var elementoParseado = parseInt(String.fromCharCode(elemento.charCode));
  if (elementoParseado > 0 && elementoParseado < 9 ) {
  }
  else {
      elemento.preventDefault();
      alert("CARÁCTER NO PERMITIDO")
  }
}