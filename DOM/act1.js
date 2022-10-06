function anadir_parrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo añadido.');
    parrafo.appendChild(texto);
    document.getElementById('editar').appendChild(parrafo);
}

function insertar_parrafo(){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('Párrafo insertado.');
    parrafo.appendChild(texto);
    var cogerElemento = document.getElementById('editar').getElementsByTagName('p')[1];
    document.getElementById('editar').insertBefore(parrafo, cogerElemento);
}

function reemplazar_parrafo(){
    var parrafo = document.getElementById('editar');
    var texto = parrafo.children[1];

    var nuevoparrafo = document.createElement('p');
    nuevoparrafo.textContent = 'Párrafo remplazado';

    parrafo.replaceChild(nuevoparrafo,texto);
}

function eliminar_parrafo(){
    var cogerElemento = document.getElementById('editar').getElementsByTagName('p')[1].remove();
}

function clonar_div(){
    parrafo = document.getElementById('editar').cloneNode(true);
    document.body.appendChild(parrafo);
}