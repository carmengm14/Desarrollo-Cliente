$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  });

function comprar() {
  window.location.href = "http://127.0.0.1:5500/html/tarifas.html";
}

const acordeon = document.getElementsByClassName('contenedor');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}