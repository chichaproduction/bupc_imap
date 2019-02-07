<?php
include("../config/dbConnect.php");


class insertEventController{  

    public function insertDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $event_information = json_decode($str_json, true); // decoding received JSON to array
        
        // $buildingCode = strtoupper($response);
       
       

        $data = [
            'is_active'  => 1,
            'event_name' => $event_information['event_name'],
            'event_desc' => $event_information['event_description'],
            'event_date' => date("Y-m-d", strtotime(($event_information['event_date']))),
        ];

        // print_r($data);

        $inserting = "INSERT INTO events (event_name, event_desc, event_date, is_active) VALUES (:event_name, :event_desc, :event_date, :is_active)";
        $insert_data_event= $dbCon->prepare($inserting);
        $insert_data_event->execute($data);


        foreach($event_information['sub_specification'] as $key => $value){
           // print_r($value);


        }


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