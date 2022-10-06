function anadir_elemento(){
    var parrafo = document.createElement('li');
    var texto = document.createTextNode('Tiburon');
    parrafo.appendChild(texto);
    document.getElementById('lista').appendChild(parrafo);
}

function insertar_elemento(){
    var parrafo = document.createElement('li');
    var texto = document.createTextNode('Perro');
    parrafo.appendChild(texto);
    var cogerElemento = document.getElementById('lista').getElementsByTagName('li')[0];
    document.getElementById('lista').insertBefore(parrafo,cogerElemento);
}

function reemplazar_elemento(){
    var parrafo = document.getElementById('lista');
    var texto = parrafo.children[0];

    var nuevoparrafo = document.createElement('li');
    nuevoparrafo.textContent = 'Gato';

    parrafo.replaceChild(nuevoparrafo,texto);
}

function borrar_elemento(){
    var cogerElemento = document.getElementById('lista').getElementsByTagName('li')[0].remove();
}

function clonar_div(){
    parrafo = document.getElementById('lista').cloneNode(true);
    document.body.appendChild(parrafo);
}

function sublistaDOM(){
    var parrafo = document.createElement('ul');
    var parrafo2 = document.createElement('li');
    var texto = document.createTextNode('FOCA');
    parrafo.appendChild(parrafo2).appendChild(texto);
    document.getElementById('lista').getElementsByTagName('li')[0].appendChild(parrafo);
}

function sublistainnerHTML(){
    var parrafo = document.createElement('ul');
    parrafo.innerHTML += "<li> MORSA </li>";
    document.getElementsByTagName('li')[2].appendChild(parrafo);
 
}
