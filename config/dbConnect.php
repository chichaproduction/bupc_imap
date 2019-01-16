<?php 
	require_once "dbconfig.php";

	/**
     * `connectToDb` Connects to Database Driver.
     * @return Object db connection string
     */

        try
        {
            $dbCon = new PDO(DB_DRIVER, DB_USERNAME, DB_PASSWORD);
            $dbCon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            if($dbCon) { echo "CONNECTED to the db Successfully"; }
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
        
    
    ?>



<!-- 
require_once 'dbconfig.php';
 
 $dsn= "mysql:host=$host;dbname=$db";
  
 try{
  // create a PDO connection with the configuration data
  $conn = new PDO($dsn, $username, $password);
  
  // display a message if connected to database successfully
  if($conn){
  echo "Connected to the <strong>$db</strong> database successfully!";
         }
 }catch (PDOException $e){
  // report error message
  echo $e->getMessage();
 } -->