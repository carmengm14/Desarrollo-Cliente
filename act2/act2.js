function mes(mes){
    switch (mes) {
        case "marzo":
            case "abril":
                case "mayo":
                    case "junio":
                        alert(mes + " ES DE: PRIMAVERA");
                        break;
        case "julio":
            case "agosto":
                case "septiembre":
                    alert(mes + " ES DE: VERANO");
                    break;
        case "octubre":
            case "noviembre":
                case "diciembre":
                    alert(mes +" ES DE: OTOÑO");
                    break;
        case "enero":
            case "febrero":
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