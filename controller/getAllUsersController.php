<?php
include("../config/dbConnect.php");


class getAllUsersController{  

    public function getDetails(){
        global $dbCon;


        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET coordinates INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        
        $users_stmt = $dbCon->prepare('SELECT id,username, access_id, password FROM user');
        $users_stmt->execute(); 
        $users_stmt_result = $users_stmt->fetchAll(\PDO::FETCH_ASSOC);

        $admin_access = [];
        $temp_access = [];
        foreach($users_stmt_result as $key => $value){
            if($value['access_id'] == "0"){
                // echo($value['username'] . "<br>");
                array_push($temp_access, $value);
            }else{
                array_push($admin_access, $value);
            }
        }

        $user_result_data = [
            "admin" => $admin_access,
            "temp"  => $temp_access
        ];


        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($user_result_data);
        echo $returnParam;
    }

}


?>