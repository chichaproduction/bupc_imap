<?php
require_once('../config/dbConnect.php');


//echo file_get_contents('php://input');

class homeController{


public function getDetails(){

$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
$response = json_decode($str_json, true); // decoding received JSON to array


echo($str_json);
    // $output = array(
    //     'user'            => $this->getUsers($_SESSION['user_id'])[0],
    //     'prs'             => $this->getPRS(),
    //     'report_no'       => $this->getCounter(), 
    //     'chart_reports'   => $this->getReport_No_List(),
    //     'materials'       => $this->get_Materials(),
    //     'current_user_id' => $_SESSION['user_id']
    // );

    // $output['user']['current_date'] = date("Y-M-d");
    

    
return $output;
}



}



?>