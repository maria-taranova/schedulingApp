<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$method = $request->type;


if(isset($_POST) && !empty($_POST)){  
    if($method === "getrooms"){
        
        include("rooms.php");
        $gear = new Gear($db);
        echo json_encode($gear->getAllGear($request->rdate));   
    }
        
    if($method === "getRoomSchedule"){
        
        include("rooms.php");
        $gear = new Gear($db);
        //var_dump($request->rdate);
        //exit;
        echo json_encode($gear->getGear($request->roomid, $request->rdate)); 
       
    }
        
    
  }

?>