<?php session_start();
include("../config/dbConnect.php");


class loginValidationController{  

    public function getUser(){
        global $dbCon;

        $str_json = file_get_contents("php://input"); //($_POST doesn"t work here)
        $validateinfo = json_decode($str_json, true); // decoding received JSON to array
       
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET USER INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            $userinfo = $dbCon->prepare("SELECT username, password FROM user WHERE username = :usie");
            $userinfo->execute(["usie" => $validateinfo["user"]]); 
            $userinfo_result = $userinfo->fetchAll(\PDO::FETCH_ASSOC);
            if(empty($userinfo_result)){
                $returnValidation = "false_user";

            }else{
                $hash = $userinfo_result[0]["password"];
                    if (password_verify($validateinfo["pass"], $hash)) {
                        $_SESSION["user"] = $userinfo_result[0]["username"];
                        $returnValidation = $userinfo_result[0]["username"];
                    } else {
                        
                        $returnValidation = "false_pass";
                    }
            }
        // /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($returnValidation);
        echo $returnParam;
    }

}


?>