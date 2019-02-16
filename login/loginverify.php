<?php  
session_start();
if (isset($_SESSION['user'])) {
    // logged in

        
  if($_SESSION['user']){
    $user = $_SESSION['user'];
    $access = $_SESSION['access'];

    $user_acess = [
      'user'  => $user,
      'access' => $access
  ];
  }else{
    $user_acess = [
      'user'  => false,
      'access' => false
  ];
  }

    $returnUser = json_encode($user_acess);
        echo $returnUser;
  } else {
    // not logged in
    $user_acess = [
      'user'  => false,
      'access' => false
  ];
    $returnUser = json_encode($user_acess);
        echo $returnUser;
  }




?>