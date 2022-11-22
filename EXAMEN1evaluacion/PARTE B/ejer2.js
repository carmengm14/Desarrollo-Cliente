var cuenta = 0;
var contadorEntrantes = 0;
var contadorSegPlato = 0;
var nombres= " ";

    function sumarEntrantes(){
        cuenta = cuenta + 5;
        contadorEntrantes += 1;
        nombres += this.value + " - ";
    }

    function sumarSegPlato(){
        cuenta = cuenta + 10;
        contadorSegPlato +=1;
        nombres += this.value + " - ";
    }


function resultado(){
    alert("TIENES SELECCIONADOS " + contadorEntrantes + " ENTRANTES Y "+ contadorSegPlato + " SEGUNDOS PLATO\n TU PRECIO FINAL ES DE = " + (cuenta + 5) + "\n LOS PLATOS SELECCIONADOS SON = " + nombres );
}
