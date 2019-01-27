<?php
include("../config/dbConnect.php");


class homeController{  

    public function getDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $response = json_decode($str_json, true); // decoding received JSON to array

        $buildingCode = strtoupper($response);

        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET BUILDING INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $building_stmt = $dbCon->prepare('SELECT * FROM buildings');
        $building_stmt->execute(); 
        $building_stmt_result = $building_stmt->fetchAll(\PDO::FETCH_ASSOC);


        $buildingInfo = array();


        foreach($building_stmt_result as $key => $value){
            if($buildingCode === $value['building_code']){
            
                array_push($buildingInfo, $value);
            }
        }

        $building_id = $buildingInfo[0]['id'];

        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  GET ROOM INFORMATION  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $rooms_stmt = $dbCon->prepare("SELECT * FROM rooms WHERE building_id = :b_id");
        $rooms_stmt->execute(['b_id' => $building_id]);
        // $row = $statement->fetch(); 
        $rooms_stmt_result = $rooms_stmt->fetchAll(\PDO::FETCH_ASSOC);


        $buildingInfo[0]['rooms'] = $rooms_stmt_result;



        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($buildingInfo);
        echo $returnParam;
    }

}


?>