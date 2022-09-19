function mes(mes){
    switch (mes) {
        case "marzo", "abril", "mayo", "junio":
            alert(mes + " ES DE: PRIMAVERA");
            break;
        case "julio", "agosto", "septiembre":
            alert(mes + " ES DE: VERANO");
            break;
        case "octubre", "noviembre", "diciembre":
            alert(mes +" ES DE: OTOÑO");
            break;
        case "enero", "febrero":
            alert(mes +" ES DE: INVIERNO");
            break;
        default:
            alert(mes +" NO ES UN MES VALIDO");
            break;
    }
}

var meses = (prompt("Introduce un mes"));
var mEses = meses.toLowerCase();
mes(mEses);