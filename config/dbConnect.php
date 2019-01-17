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
            // if($dbCon) { echo "CONNECTED to the db Successfully"; }
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
        
    
    ?>

