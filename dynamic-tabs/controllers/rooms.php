<?php
include("../model/roomsdb.php");
class Gear {
	private $data;
    private $db;
    private $gearDB;
    
  function __construct($db){
        $this->db = $db;
        $this->gearDB = new Geardb($this->db);
        $this->data = array();
    }
    
    function getAllGear(){
        $rooms = $this->gearDB->get();
        
        if(!empty($rooms)){
            return array("status"=>1, "rooms"=>$rooms);
        } else {
            return array("status"=>0);
        }
    }
    
    
    function getGear($id, $date){
        $this->gearDB->set(array(
            "id"=>$id,
            "date"=>$date  
        ));
        $gear = $this->gearDB->getSchedule($id);
     
        if(!empty(current($gear))){
            return array("status"=>1, "days"=>$gear);
        } else {
            return array("status"=>0);
        }
    }
    
    function delete(){
        
    }
    

    
}

?>