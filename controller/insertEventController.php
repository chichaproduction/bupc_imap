<?php
include("../config/dbConnect.php");


class insertEventController{  

    public function getDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $event_information = json_decode($str_json, true); // decoding received JSON to array
       

        
        // $buildingCode = strtoupper($response);
       
       

        $data = [
            'is_active'  => 1,
            'event_name' => $event_information['event_name'],
            'event_desc' => $event_information['event_description'],
            'event_date' => date("Y-m-d", strtotime(($event_information['event_date']))),
            'created_at' => date("Y-M-d")
        ];
        
        // print_r($event_information);
        $inserting = "INSERT INTO events (event_name, event_desc, event_date, is_active, created_at) VALUES (:event_name, :event_desc, :event_date, :is_active, :created_at)";
        $insert_data_event= $dbCon->prepare($inserting);
        $insert_data_event->execute($data);
        $last_id = $dbCon->lastInsertId();
        // /print_r("========" . $last_id . "=========");

        foreach($event_information['sub_specification'] as $key => $value){

            //echo($value['sub_event_room'] . "===");
            $temp_sub_event_id          = $last_id;
            $temp_sub_event_name        = $value['sub_event_name'];
            $temp_sub_event_start_time  = $value['sub_event_start_time'];
            $temp_sub_event_end_time    = $value['sub_event_end_time'];
            $temp_sub_event_building    = $value['sub_event_building'];
            $temp_sub_event_room        = $value['sub_event_room'];
            $temp_sub_event_description = $value['sub_event_description'];
            $temp_sub_event_hosted_at   = $value['sub_event_hosted_at'];
            $temp_sub_event_hosted_by   = $value['sub_event_hosted_by'];
            
            $b_id = $dbCon->prepare('SELECT id FROM buildings WHERE building_name = :b_name');
            $b_id->execute(['b_name' => $temp_sub_event_building]); 
            $b_id_result = $b_id->fetchAll(\PDO::FETCH_ASSOC);

            $temp_sub_event_building_id = $b_id_result[0]['id'];

           
            $r_id = $dbCon->prepare('SELECT id FROM rooms WHERE room_name = :r_name');
            $r_id->execute(['r_name' => $temp_sub_event_room]); 
            $r_id_result = $r_id->fetchAll(\PDO::FETCH_ASSOC);

            $temp_sub_event_room_id = $r_id_result[0]['id'];
            

            $data_sub = [
                'is_active'             => 1,
                'event_id'              => $temp_sub_event_id,
                'building_id'           => $temp_sub_event_building_id,
                'room_id'               => $temp_sub_event_room_id,
                'sub_event_name'        => $temp_sub_event_name,
                'sub_event_desc'        => $temp_sub_event_description,
                'sub_event_time_start'  => $temp_sub_event_start_time,
                'sub_event_time_end'    => $temp_sub_event_end_time,
                'sub_event_hosted_at'   => $temp_sub_event_hosted_at,
                'sub_event_hosted_by'   => $temp_sub_event_hosted_by,
                'created_at'            => date("Y-M-d")
            ];
            print_r($data_sub);
            $inserting_sub = "INSERT INTO 
            sub_events (
                is_active, 
                event_id, 
                building_id, 
                room_id,
                sub_event_name, 
                sub_event_desc, 
                sub_event_time_start, 
                sub_event_time_end, 
                sub_event_hosted_at, 
                sub_event_hosted_by, 
                created_at 
            ) VALUES (:is_active, 
                :event_id, 
                :building_id, 
                :room_id,
                :sub_event_name, 
                :sub_event_desc, 
                :sub_event_time_start, 
                :sub_event_time_end, 
                :sub_event_hosted_at, 
                :sub_event_hosted_by, 
                :created_at 
                )";


// $inserting = "INSERT INTO events (event_name, event_desc, event_date, is_active, created_at) VALUES (:event_name, :event_desc, :event_date, :is_active, :created_at)";
// $insert_data_event= $dbCon->prepare($inserting);

            $insert_sub_data_event= $dbCon->prepare($inserting_sub);
            
            $insert_sub_data_event->execute($data_sub);
          


        //   echo($value['sub_event_name'] . "<br>");


        }


        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET coordinates INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        
        // $building_stmt = $dbCon->prepare('SELECT building_code FROM buildings');
        // $building_stmt->execute(); 
        // $building_stmt_result = $building_stmt->fetchAll(\PDO::FETCH_ASSOC);

        // $temp_arr = [];
        
        // foreach($building_stmt_result as $key => $value){
           
        // $coord_stmt = $dbCon->prepare('SELECT building_code, coordinates FROM buildings WHERE building_code = :b_code');
        // $coord_stmt->execute(['b_code' => $value['building_code']]); 
        // $coord_stmt_result = $coord_stmt->fetchAll(\PDO::FETCH_ASSOC);

        // array_push($temp_arr, $coord_stmt_result);
        // }





        // $coords = json_encode($building_stmt_result);
        
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // $returnParam = json_encode($temp_arr);
        // echo $returnParam;
    }


    

}


?>