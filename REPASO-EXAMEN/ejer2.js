window.onload = function() {
  var elemento = document.getElementsByName("aficion");
  var btnEnviar = document.getElementById("btnEnviar");

  var form = document.getElementById("formulario");
  form.addEventListener('submit', comprobarNombre);

  function comprobarNombre(event){
    var nombre = document.getElementById("nombre").value;
    if (nombre.length == 0) {
      alert("EL CAMPO NOMBRE NO PUEDE ESTAR VACIO");
      event.preventDefault();
    } else {
      this.submit();
    }
  }


  for (let i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("change", function() {
      checkMusica(elemento);
    })
  }  

  btnEnviar.addEventListener("click", function() {
    var Fecha = document.getElementById("fechaID");
    var Musico = document.getElementById("musicoID");
    var Album = document.getElementById("albumID");
    var anyo = Fecha.value.substr(Fecha.value.length - 4);
    if (checkDate()) {
      if (event.preventDefault) {
        alert("Formato de fecha no valido")
        Fecha.focus();
        event.preventDefault();
      } else {
        alert("Formato de fecha no valido")
        Fecha.focus();
        event.returnValue = false;
      }
    } else {
      alert("El artista '" + Musico.value + "' compuso su album '" + Album.value + "' en el año " + anyo + ". Tuvo un gran exito")
    }
  })
}

function checkMusica(elemento) {
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i].checked) {
      if (elemento[i].value == "musica") {
        crearCheckBoxMusica();
      } else {
        alert(elemento[i].value)
      }
    }
  }
}

function crearCheckBoxMusica() {
  var form = document.getElementById("formulario");

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.value = "Seleccion años 80"

  var label = document.createElement("label"); 
  var textNode = document.createTextNode("Seleccion musica años 80");
  label.setAttribute("for", "musicaSeleccion")
  label.appendChild(textNode);

  checkbox.addEventListener('change', function() {
    MensajeCheckBox(checkbox);
    crearCampos();
  })

  form.appendChild(checkbox);
  form.appendChild(label);
  form.appendChild(document.createElement("BR"));
}

function crearCampos() {
  crearCampoMusica()
  crearCampoAlbum()
  crearCampoFecha()
}

function crearCampoMusica() {
  var form = document.getElementById("formulario");

  var labelMusico = document.createElement("label"); 
  var textNodeMusico = document.createTextNode("MUSICO");
  labelMusico.setAttribute("for", "MUSICO")
  labelMusico.appendChild(textNodeMusico);

  var Musico = document.createElement("input");
  Musico.setAttribute("type", "text");
  Musico.setAttribute("id", "musicoID");

  form.appendChild(document.createElement("br"));

  form.appendChild(labelMusico);
  form.appendChild(Musico);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));

}

function crearCampoAlbum() {
  var labelAlbum = document.createElement("label"); 
  var textNodeAlbum = document.createTextNode("ALBUM");
  labelAlbum.setAttribute("for", "ALBUM")
  labelAlbum.appendChild(textNodeAlbum);

  var Album = document.createElement("input");
  Album.setAttribute("type", "text");
  Album.setAttribute("id", "albumID");

  form.appendChild(labelAlbum);
  form.appendChild(Album);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
}

function crearCampoFecha() {
  var labelFecha = document.createElement("label"); 
  var textNodeFecha = document.createTextNode("FECHA");
  labelFecha.setAttribute("for", "FECHA")
  labelFecha.appendChild(textNodeFecha);

  var Fecha = document.createElement("input");
  Fecha.setAttribute("type", "text");
  Fecha.setAttribute("id", "fechaID");

  form.appendChild(labelFecha);
  form.appendChild(Fecha);
  form.appendChild(document.createElement("br"));
}

function checkDate() {
  var Fecha = document.getElementById("fechaID");

  if (!(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/.test(Fecha.value))) { // Expresion regular para comprobar si es mas de 9 numeros
    return true;
  }
  return false;
}

function MensajeCheckBox(checkbox) {
  if (checkbox.checked) {
    alert("Has hecho una buena eleccion")
  } else {
    alert("Has deseleccionado")
  }
}
