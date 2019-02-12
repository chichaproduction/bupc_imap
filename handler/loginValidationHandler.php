<?php
require_once("../controller/loginValidationController.php");


$lic = new loginValidationController();
$log_in_controller = $lic-> getUser();
echo $log_in_controller;





?>