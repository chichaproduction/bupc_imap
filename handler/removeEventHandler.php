<?php
require_once("../controller/removeEventController.php");


$re = new removeEventController();
$reControl = $re-> removeDetails();
echo $reControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>