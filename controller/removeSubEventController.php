<?php
include("../config/dbConnect.php");


class removeSubEventController{  

    public function removeDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $remove_information = json_decode($str_json, true); // decoding received JSON to array
       

        $id = $remove_information;


        $id = $remove_information;
        $update_inactive_stmt = "UPDATE sub_events SET is_active=0 WHERE id=:id";
        $update_inactive_event= $dbCon->prepare($update_inactive_stmt);
        $update_inactive_event->execute(['id' => $id]);

     

       
       
    }


    

}


?>