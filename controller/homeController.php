<?php
include("../config/dbConnect.php");


class homeController{  

public function getDetails(){
global $dbCon;

$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
$response = json_decode($str_json, true); // decoding received JSON to array
echo($response);


$statement = $dbCon->prepare("select * from buildings");
$statement->execute();
// $row = $statement->fetch(); 
$result = $statement->fetchAll(\PDO::FETCH_ASSOC);

var_dump($result);

foreach($result as $key => $value){
    echo $value[building_code] . "<br>";
}


$returnParam = json_encode($row);
//     echo($returnParam);
return $returnParam;
}


// }

}


?>