<?php
include("../config/dbConnect.php");


class getAllEventController{  

    public function getDetails(){
        global $dbCon;

   
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   GET EVENT INFORMATION xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        

        $all_statement_stmt =  $dbCon->prepare('SELECT * FROM events');
        $all_statement_stmt->execute();
        $all_statement_stmt_result = $all_statement_stmt->fetchAll(\PDO::FETCH_ASSOC);

       // print_r($all_statement_stmt_result);

       

        foreach($all_statement_stmt_result as $key => $value){
            $temp_id_query = $value['id'];

            $all_sub_statement_stmt = $dbCon->prepare('SELECT * FROM sub_events WHERE event_id = :event_id');
            $all_sub_statement_stmt->execute(['event_id' => $temp_id_query]); 
            $all_sub_statement_stmt_result = $all_sub_statement_stmt->fetchAll(\PDO::FETCH_ASSOC);
            $all_statement_stmt_result[$key]['sub_events'] = $all_sub_statement_stmt_result ;
            $all_statement_stmt_result[$key]['modal_id'] = 'event_no_'. $key ;
            $all_statement_stmt_result[$key]['modal_head'] = 'event_head_'. $key ;
            $all_statement_stmt_result[$key]['open'] = false ;
            // array_push($all_statement_stmt_result[$key], $all_sub_statement_stmt_result);

        };

        // print_r($all_statement_stmt_result);
        /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  RETURN DATA  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        $returnParam = json_encode($all_statement_stmt_result);
        echo $returnParam;
    }

}


?>