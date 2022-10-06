function cambiarColor(color) {
    document.getElementById('colores').style.backgroundColor = color;
    if (color == '#0000FF' || color == '#006414') {
        document.getElementById('colores').style.color = '#FFFFFF';
    }else{
        document.getElementById('colores').style.color = '#000000';
    }

}