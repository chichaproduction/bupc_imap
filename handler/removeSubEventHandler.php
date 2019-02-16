<?php
require_once("../controller/removeSubEventController.php");


$rse = new removeSubEventController();
$rseControl = $rse-> removeDetails();
echo $rseControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>