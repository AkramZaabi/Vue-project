<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');
  
  
    include_once 'connexion.php';

    $id = $_GET["id"];

    // Requête SQL
    $sql = "SELECT * FROM reviews WHERE id = $id";
    
    $reponse = $con->prepare($sql);
    $reponse->execute();

    $event = $reponse->fetch(PDO::FETCH_ASSOC);

    echo json_encode($event);
?>