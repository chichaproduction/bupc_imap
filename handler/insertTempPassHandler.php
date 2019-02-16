<?php
require_once("../controller/insertTempPassController.php");


$itp = new insertTempPassController();
$itpControl = $itp-> insertDetails();
echo $itpControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>