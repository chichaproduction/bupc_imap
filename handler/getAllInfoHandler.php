<?php
require_once("../controller/getAllInfoController.php");


$gaic = new getAllInfoController();
$get_all_info_controller = $gaic-> getDetails();
echo $get_all_info_controller;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>