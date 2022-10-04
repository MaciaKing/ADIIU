<?php
$con = mysqli_connect("localhost","root","") or die("Localhost no disponible");
$db = mysqli_select_db($con,"ADIIU") or die("Base de dades no disponible");

function extract() {
    echo "Hello world!";

    $result = $mysqli->query("SELECT Name, money FROM People");

}

?>
