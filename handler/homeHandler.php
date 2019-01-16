<?php
require_once("../controller/homeController.php");


$home = new homeController();
$home_controller = $home-> getDetails();
echo $home_controller;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>