<?php
require_once("../controller/insertEventController.php");


$ie = new insertEventController();
$ieControl = $ie-> insertDetails();
echo $ieControl;
var_dump($ieControl);
// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>