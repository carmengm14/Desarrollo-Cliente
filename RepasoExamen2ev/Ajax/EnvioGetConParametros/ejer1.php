<?php
    $mysqli = new mysqli("localhost:3306","root", "sa", "BdAnexoAjax");
    if($mysqli->connect_error){
        exit("Could not connect");
    }


    $sql="SELECT id, nombre, apellido, email, telefono FROM Cliente WHERE id=?";

    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $_GET['envioNombre']);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $nombre, $apellido, $email, $telefono);
    $stmt->fetch();
    $stmt->close();
    

    echo "<table>";
    echo "<tr>";
    echo "<th>ID</th>";
    echo "<td>" . $id . "</td>";
    echo "<th>nombre</th>";
    echo "<td>" . $nombre . "</td>";
    echo "<th>Apellido</th>";
    echo "<td>" . $apellido . "</td>";
    echo "<th>Email</th>";
    echo "<td>" . $email . "</td>";
    echo "<th>Telefono</th>";
    echo "<td>" . $telefono . "</td>";
    echo "</tr>";
    echo "</table>";

?>