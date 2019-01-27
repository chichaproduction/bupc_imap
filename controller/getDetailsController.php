<?php
include("../config/dbConnect.php");


class getDetailsController{  

    public function getDetails(){
        global $dbCon;


        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET coordinates INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        
        $building_stmt = $dbCon->prepare('SELECT building_code FROM buildings');
        $building_stmt->execute(); 
        $building_stmt_result = $building_stmt->fetchAll(\PDO::FETCH_ASSOC);

        $temp_arr = [];
        
        foreach($building_stmt_result as $key => $value){
           
        $coord_stmt = $dbCon->prepare('SELECT building_code, coordinates FROM buildings WHERE building_code = :b_code');
        $coord_stmt->execute(['b_code' => $value['building_code']]); 
        $coord_stmt_result = $coord_stmt->fetchAll(\PDO::FETCH_ASSOC);

        array_push($temp_arr, $coord_stmt_result);
        }





        // $coords = json_encode($building_stmt_result);
        
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($temp_arr);
        echo $returnParam;
    }

}


?>