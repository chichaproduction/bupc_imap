<?php
require_once("../controller/homeController.php");
include("../config/dbConnect.php");



$home = new homeController(connectToDb());
$home_controller = $home-> getDetails();
echo result;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>