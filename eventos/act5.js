function permite(elEvento, permitidos) {
    // Variables que definen los caracteres permitidos
    var numeros = "0123456789";

    switch(permitidos) {
      case 'num':
        permitidos = numeros;
        break;
    }
  
    // Obtener la tecla pulsada
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
  
    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    var tecla_especial = false;
    for(var i in teclas_especiales) {
      if(codigoCaracter == teclas_especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
  
    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return permitidos.indexOf(caracter) != -1 || tecla_especial;
  }
  <html>  
  // Sólo números
  <input type="text" id="texto" onkeypress="return permite(event, 'num')" />
  
  // Sólo letras
  <input type="text" id="texto" onkeypress="return permite(event, 'car')" />
  
  // Sólo letras o números
  <input type="text" id="texto" onkeypress="return permite(event, 'num_car')" />
  </html>