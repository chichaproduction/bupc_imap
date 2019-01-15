<?php
class homeController{  
 
public function getDetails(){
global $dbCon;

$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
$response = json_decode($str_json, true); // decoding received JSON to array
echo($response);

// $db = new PDO("...");
$statement = $dbCon->prepare("select * from buildings");
// $statement->execute(array(':name' => "Jimbo"));
// $row = $statement->fetch(); 

$returnParam = json_encode($row);
//     echo($returnParam);
return $returnParam;
}


// }

}


?>