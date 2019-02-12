<?php
require_once("../controller/insertEventController.php");


$ie = new insertEventController();
$ieControl = $ie-> getDetails();
echo $ieControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>