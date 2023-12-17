<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once 'connexion.php';

    // get posted data from json input
    // and transform it to an object
    $data = json_decode(file_get_contents("php://input"));

    // Retrieve information from the Vue.js frontend
    $name    = $data->name;
    $email   = $data->email;
    $review  = $data->review;
    $rating  = $data->rating;
    $color   = $data->color;

    // SQL Query
    $sql = 'INSERT INTO `reviews` (`name`, `email`, `review`, `rating`, `color`) 
            VALUES (?, ?, ?, ?, ?)';
    $statement = $con->prepare($sql);
    $statement->execute([$name, $email, $review, $rating, $color]);
    
    if ($statement) {
        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "Review was created."));
    } else { // if unable to create the review, tell the user
         // set response code - 503 service unavailable
         http_response_code(503);
  
         // tell the user
         echo json_encode(array("message" => "Unable to create review."));   
    }
?>
