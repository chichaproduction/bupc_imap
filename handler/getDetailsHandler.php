<?php
require_once("../controller/getDetailsController.php");


$gd = new getDetailsController();
$gdControl = $gd-> getDetails();
echo $gdControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>