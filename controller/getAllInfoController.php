<?php
include("../config/dbConnect.php");


class getAllInfoController{  

    public function getDetails(){
        global $dbCon;

   

        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET BUILDING INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $building_stmt = $dbCon->prepare('SELECT * FROM buildings');
        $building_stmt->execute(); 
        $building_stmt_result = $building_stmt->fetchAll(\PDO::FETCH_ASSOC);


        $buildingInfo = array();


        foreach($building_stmt_result as $key => $value){
            
                array_push($buildingInfo, $value);
           
        

        $building_id = $buildingInfo[$key]['id'];

        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  GET ROOM INFORMATION  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $rooms_stmt = $dbCon->prepare("SELECT * FROM rooms WHERE building_id = :b_id");
        $rooms_stmt->execute(['b_id' => $building_id]);
        // $row = $statement->fetch(); 
        $rooms_stmt_result = $rooms_stmt->fetchAll(\PDO::FETCH_ASSOC);


        $buildingInfo[$key]['rooms'] = $rooms_stmt_result;
 }


        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($buildingInfo);
        echo $returnParam;
    }

}


?>