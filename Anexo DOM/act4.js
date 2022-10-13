window.onload = function(){
    //cogemos los links
    var links = document.getElementById('links');
        //cuando se clica en él que haga la funcio contarLinks
    links.addEventListener("click",contarLinks);
        //la funcion coge todos elementos que contangan a y muestra el tamaño de este.
    function contarLinks(){
        var contador = document.getElementsByTagName('a');
        alert("Hay " + contador.length + " links");
    }

//cogemos las referencias
    var referenciaEnlaces = document.getElementById('referencia');
    referenciaEnlaces.addEventListener("click",referenciaEnlace);
    function referenciaEnlace(){
        texto ="";
        var enlace = document.getElementsByTagName('a');
        for (let i = 0; i < enlace.length; i++) {
            texto += enlace[i].href;
            texto += "\n";
        }
        alert(texto);
    }

//cogemos las referencias por párrafo
    var referenciaEnlaces = document.getElementById('referenciaParrafo');
    referenciaEnlaces.addEventListener("click",referenciaParrafos);
    function referenciaParrafos(){
        texto ="";
        var parrafo = document.getElementsByTagName('p');

        for (let i = 0; i < parrafo.length; i++) {
            var enlace = parrafo[i].getElementsByTagName('a');
            for (let j = 0; j < enlace.length; j++) {
                texto += enlace[j].href;
                texto += "\n";                
            }
        }
        alert(texto);
    }

//cogemos los párrafo
    var parrafo = document.getElementById('parrafosVerdes');
    parrafo.addEventListener("click",parrafosVerdes);
    cantidad = document.getElementsByTagName("p");
    function parrafosVerdes(){
        for (let i = 0; i < cantidad.length; i++) {
            document.getElementsByTagName("p")[i].style.backgroundColor = '#006414';
            document.getElementsByTagName("p")[i].style.color = 'white';
        }

    }


//cogemos los párrafo
    var parrafo = document.getElementById('desactivarColor');
    parrafo.addEventListener("click",desactivar);
    cantidad = document.getElementsByTagName("p");
    function desactivar(){
        for (let i = 0; i < cantidad.length; i++) {
            document.getElementsByTagName("p")[i].style.backgroundColor = '#FFFFFF';
            document.getElementsByTagName("p")[i].style.color = 'black';
        }

    }
}
