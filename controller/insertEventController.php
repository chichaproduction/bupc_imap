<?php
include("../config/dbConnect.php");


class insertEventController{  

    public function getDetails(){
        global $dbCon;

        $str_json = file_get_contents('php://input'); //($_POST doesn't work here)
        $event_information = json_decode($str_json, true); // decoding received JSON to array
       
        $subeventCount = count($event_information['sub_specification']);
        $substarterrorCounter = 0;
        $subenderrorCounter = 0;

        foreach($event_information['sub_specification'] as $key => $value){

            foreach($event_information['sub_specification'] as $key1 => $value1){

                if($value['sub_event_hosted_at'] == $value1['sub_event_hosted_at']){
                    if($value['sub_event_start_time'] >= $value1['sub_event_start_time'] &&
                        $value['sub_event_start_time'] <= $value1['sub_event_end_time']
                        ){
                            // print_r("START time conflict!!" . " = " . $value['sub_event_start_time'] . ' with ' . $value1['sub_event_start_time'] . " - " . $value1['sub_event_end_time'] . "<br>");
                        $substarterrorCounter++;
                    }else{
                        // end time check
                        if($value['sub_event_end_time'] >= $value1['sub_event_start_time'] &&
                        $value['sub_event_end_time'] <= $value1['sub_event_end_time']
                        ){
                            // print_r("END time conflict!!" . " = " .$value['sub_event_start_time'] . ' with ' . $value1['sub_event_start_time'] . " - " . $value1['sub_event_end_time'] . "<br>");
                            $subenderrorCounter++;
                        }else{
                            // print_r("time OK!!" . " = " . $value['sub_event_start_time'] . "-" .  $value['sub_event_end_time'] . ' with ' . $value1['sub_event_start_time'] . " - " . $value1['sub_event_end_time'] . "<br>");
                        }
                    }
                }else{
                    
                }

                    //start time check
                
            }
        }

        // print_r($substarterrorCounter);
        // print_r($subenderrorCounter);
        $SerrorCounter = 0;
        $EerrorCounter = 0;
        if($substarterrorCounter <= $subeventCount && $subenderrorCounter <= $subeventCount){

           
        $edate = date("Y-m-d", strtotime(($event_information['event_date'])));
        $eventcheck_stmt = $dbCon->prepare(
            'SELECT se.sub_event_hosted_at, se.sub_event_time_start, se.sub_event_time_end
            FROM events e
            JOIN sub_events se
            ON se.event_id = e.id  
            WHERE e.event_date = :edate
            AND e.is_active = 1'
        );
        $eventcheck_stmt->execute(['edate' => $edate]);
        // $row = $statement->fetch(); 
        $eventcheck_result = $eventcheck_stmt->fetchAll(\PDO::FETCH_ASSOC);
        // print_r($eventcheck_result);

        if($eventcheck_result){ 
            
            foreach($event_information['sub_specification'] as $key => $value){
                
                foreach($eventcheck_result as $key1 => $value1){
                    // print_r($value1);
                    if($value['sub_event_hosted_at'] == $value1['sub_event_hosted_at']){
                        if($value['sub_event_start_time'] >= $value1['sub_event_time_start'] &&
                            $value['sub_event_start_time'] <= $value1['sub_event_time_end']
                            ){
                                // print_r("START time conflict!!" . " = " . $value['sub_event_start_time'] . ' with ' . $value1['sub_event_time_start'] . " - " . $value1['sub_event_time_end'] . "<br>");
                            $SerrorCounter++;
                        }else{
                            // end time check
                            if($value['sub_event_end_time'] >= $value1['sub_event_time_start'] &&
                            $value['sub_event_end_time'] <= $value1['sub_event_time_end']
                            ){
                                // print_r("END time conflict!!" . " = " .$value['sub_event_start_time'] . ' with ' . $value1['sub_event_time_start'] . " - " . $value1['sub_event_time_end'] . "<br>");
                                $EerrorCounter++;
                            }else{
                                // print_r("time OK!!" . " = " . $value['sub_event_start_time'] . "-" .  $value['sub_event_end_time'] . ' with ' . $value1['sub_event_time_start'] . " - " . $value1['sub_event_time_end'] . "<br>");
                                
            
                            }
                        }
                    }else{
                      
    
                    }
                }
            }

            // print_r($SerrorCounter . "<br>");
            // print_r($EerrorCounter . "<br>");
        }else{

        }

        if($SerrorCounter == 0 && $EerrorCounter == 0){
            $data = [
                'is_active'  => 1,
                'event_name' => $event_information['event_name'],
                'event_desc' => $event_information['event_description'],
                'event_date' => date("Y-m-d", strtotime(($event_information['event_date']))),
                'created_at' => date("Y-M-d")
            ];
            

            
            $inserting = "INSERT INTO events (event_name, event_desc, event_date, is_active, created_at) VALUES (:event_name, :event_desc, :event_date, :is_active, :created_at)";
            $insert_data_event= $dbCon->prepare($inserting);
            $insert_data_event->execute($data);
            $last_id = $dbCon->lastInsertId();


            foreach($event_information['sub_specification'] as $key => $value){

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


                $insert_sub_data_event= $dbCon->prepare($inserting_sub);
                
                $insert_sub_data_event->execute($data_sub);
            
            }

            $returnParam = json_encode(1);
            echo $returnParam;
          }else{
            $returnParam = json_encode(0);
            echo $returnParam;
          }
    }else{
        
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode(0);
        echo $returnParam;
    }

       
    }


    

}


?>