<?php
require_once("../controller/getAllUsersController.php");


$gau = new getAllUsersController();
$gauControl = $gau-> getDetails();
echo $gauControl;

// if(isset( $_POST['invoiceno'] )) {
//      $myAnimal = new animal();
//      $result = $myAnimal->getName();
//      echo $result;
// }



?>