<?php
include("../config/dbConnect.php");


class insertTempPassController{  

    public function insertDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $user_info = json_decode($str_json, true); // decoding received JSON to array
       
      
           $tohash = $user_info['pass'];
            $pass = password_hash($tohash, PASSWORD_DEFAULT);
            $data = [
            'id'    => $user_info['id'],
            'pass'  => $pass,
            'showpass'  => $user_info['pass']
        ];

  

        $inserting = "UPDATE user SET password = :pass, temp_pass = :showpass WHERE id = :id" ;
        $insert_data_user= $dbCon->prepare($inserting);
        $insert_data_user->execute($data);
 
        ////////////// FOR RESETTING ACCOUNTS
    //           $tohash = 'default10';
    //     $pass = password_hash($tohash, PASSWORD_DEFAULT);
    // $data = [
    //     'id'    => 13,
    //     'pass'  => $pass,
    //     'showpass'  => $tohash
    // ];
    // $inserting = "UPDATE user SET password = :pass, temp_pass = :showpass WHERE id = :id" ;
    // $insert_data_user= $dbCon->prepare($inserting);
    // $insert_data_user->execute($data);

    }


    

}


?>