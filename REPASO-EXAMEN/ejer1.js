window.onload = function() {
  var elemento = document.getElementsByName("aficion");

  for (let i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("change", function() {
      checkMusica(elemento);
    })
  }
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
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.value = "Seleccion años 80"

  var label = document.createElement("LABEL"); 
  var textNode = document.createTextNode("Seleccion musica años 80");
  label.setAttribute("for", "musicaSeleccion")
  label.appendChild(textNode);

  checkbox.addEventListener('change', function() {
    MessageCheckBox(checkbox);
  })

  document.body.appendChild(checkbox);
  document.body.appendChild(label);
}

function MessageCheckBox(checkbox) {
  if (checkbox.checked) {
    alert("Has hecho una buena eleccion")
  } else {
    alert("Has deseleccionado los años 80")
  }
}
