function calcularPrecio(precio){
    var iva = precio * 0.21;
    var precioFinal = precio + iva;
    alert("Precio Final: " + precioFinal.toFixed(2));
}

var precio = parseFloat(prompt("Introduce un precio"));
calcularPrecio(precio);