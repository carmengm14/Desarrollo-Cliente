<?php
    $nombre = $_GET['nombre'];
    $contrasenya = $_GET['contrasenya'];
    if($nombre == "pepe" && $contrasenya == "hola"){
        $resultado = "USUARIO CORRECTO <br>";
        $resultado .= $nombre . " " . $contrasenya;
    }else{
        $resultado = "USUARIO INCORRECTO";
    }
    echo $resultado;
?>