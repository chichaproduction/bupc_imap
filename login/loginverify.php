<?php  
session_start();
if (isset($_SESSION['user'])) {
    // logged in

        
  if($_SESSION['user'] === "administrator"){
    $user = "acc_admin";
  }else if($_SESSION['user'] === "temporary"){
    $user = "acc_temp";
  }else{
    $user = false;
  }

    $returnUser = json_encode($user);
        echo $returnUser;
  } else {
    // not logged in
    $user = false;
    $returnUser = json_encode($user);
        echo $returnUser;
  }




?>