function anadir_parrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('anadir').appendChild(parrafo);
}

function insertar_parrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo insertado.');
    parrafo.appendChild(texto);
    document.getElementById('insertar').appendChild(parrafo);
}

function reemplazar_parrafo(){
    var parrafo = document.getElementById('insertar');
    var texto = parrafo.children[0];

    var nuevoparrafo = document.createElement('p');
    nuevoparrafo.textContent = 'Párrafo remplazado';

    parrafo.replaceChild(nuevoparrafo,texto);
}

function eliminar_parrafo(){
    var parrafo = document.getElementById('reemplazar');
    parrafo.parentNode.removeChild('reemplazar');
}

function clonar_parrafo(){
    var parrafo1 = document.getElementById('anadir');
    var parrafo2 = document.getElementById('insertar');
    var parrafo3 = document.getElementById('reemplazar');
    var clonacion = parrafo1.cloneNode(true);
}