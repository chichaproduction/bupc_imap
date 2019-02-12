<?php
require_once("../controller/getAllEventController.php");


$gaec = new getAllEventController();
$get_all_event_controller = $gaec-> getDetails();
echo $get_all_event_controller;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>