<?php
$pp = mysqli_connect("localhost","root","") or die("adios");
$db = mysqli_select_db($pp,"adiiu") or die("hola");

$recogida=$_POST['dat'];

if($recogida=="data1macia"){
    data1macia();
}elseif($recogida=="data2macia"){
    data2macia();
}else{
    //query3
    data3macia();
}

function data1macia() {
    $pp = mysqli_connect("localhost","root","") or die("adios");
    $db = mysqli_select_db($pp,"ADIIU") or die("hola");

    $query = "SELECT first_name,money FROM People LIMIT 5";
    $result = mysqli_query($pp,$query);
    while ($data=mysqli_fetch_array($result)) {
        $finalData[]=array(
         "name"=> $data['first_name'],
         "y"=> (int) $data['money']
        );
    }

    $data_final[]=array(
        "name"=> "nombre",
        "data"=> $finalData
       );
    echo json_encode($data_final);
}

function data2macia() {
    $pp = mysqli_connect("localhost","root","") or die("adios");
    $db = mysqli_select_db($pp,"ADIIU") or die("hola");

    $query = "SELECT first_name,money FROM People LIMIT 10";
    $result = mysqli_query($pp,$query);
    while ($data=mysqli_fetch_array($result)) {
        $finalData[]=array(
         "name"=> $data['first_name'],
         "y"=> (int) $data['money']
        );
    }
  echo json_encode($finalData);
}

function data3macia() {
//SELECT country,COUNT(country) AS repetido FROM People 
//GROUP BY country  
//ORDER BY repetido DESC
    $pp = mysqli_connect("localhost","root","") or die("adios");
    $db = mysqli_select_db($pp,"ADIIU") or die("hola");

    $query = "SELECT country,COUNT(country) AS repetido FROM People GROUP BY country ORDER BY repetido DESC LIMIT 5";
    $result = mysqli_query($pp,$query);
    while ($data=mysqli_fetch_array($result)) {
        $finalData[]=array(
         "name"=> $data['country'],
         "data"=> array(((int) $data['repetido']))
        // "repeated"=> (int) $data['repetido']
        );
    }

  echo json_encode($finalData);
}

?>
