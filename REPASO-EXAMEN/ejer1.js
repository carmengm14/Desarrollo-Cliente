window.onload = function() {
  var elemento = document.getElementsByName("aficion");

  for (let i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("change", function() {
      checkMusic(elemento);
    })
  }
}

function checkMusic(elemento) {
  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i].checked) {
      if (elemento[i].value == "musica") {
        createCheckBoxMusic();
      } else {
        alert(elemento[i].value)
      }
    }
  }
}

function createCheckBoxMusic() {
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.value = "Seleccion años 80"

  var label = document.createElement("LABEL"); 
  var textNode = document.createTextNode("Seleccion musica años 80");
  label.setAttribute("for", "musicaSeleccion")
  label.appendChild(textNode);

  checkbox.addEventListener('change', function() {
    showMessafeCheckBox(checkbox);
  })

  document.body.appendChild(checkbox);
  document.body.appendChild(label);
}

function showMessafeCheckBox(checkbox) {
  if (checkbox.checked) {
    alert("Has hecho una buena eleccion")
  } else {
    alert("Has deseleccionado los años 80")
  }
}
