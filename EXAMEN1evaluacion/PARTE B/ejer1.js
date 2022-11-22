var cuenta = 0;
var contadorEntrantes = 0;
var contadorSegPlato = 0;

    function sumarEntrantes(){
        cuenta = cuenta + 5;
        contadorEntrantes += 1;
    }

    function sumarSegPlato(){
        cuenta = cuenta + 10;
        contadorSegPlato +=1;
    }


function resultado(){
    alert("TIENES SELECCIONADOS " + contadorEntrantes + " ENTRANTES Y "+ contadorSegPlato + " SEGUNDOS PLATO, TU PRECIO FINAL ES DE = " + (cuenta + 5 ));
}
