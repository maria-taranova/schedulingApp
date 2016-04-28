<?php
require_once("connect.php");
//var_dump($db);
class Geardb {
	private $data;
    private $db;
    
    function set($data){
        $this->data = $data;
    }
    
    function __construct($db){
        $this->db = $db;
        $this->data = array();
    }
    


    
    function get(){
        $result = false;
        $query = "SELECT * FROM rooms";
        if(isset($this->data["id"])){
            $query .= " WHERE gear.id = :id";
            $query .= " ORDER BY gear.timestamp DESC";
            //echo $query;
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute(array(":id"=>$this->data["id"]));
            
        } else if(isset($this->data["user_id"])){
            $query .= " WHERE gear.user_id = :user_id";
            $query .= " ORDER BY gear.timestamp DESC";
            //echo $query;
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute(array(":user_id"=>$this->data["user_id"]));
            
        } else if(isset($this->data["rdate"])){
            $query .= " WHERE date = :date";
           
            //echo $query;
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute(array(":date"=>$this->data["rdate"]));
            
        }
        
        else {
            $query .= " ORDER BY id DESC";
            //echo $query;
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute();
            
        }
        
        
        if($result){
           $arr = array();
            $ids = "";
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                $arr[$row["id"]] = $row;
                $ids .= $row["id"].",";
            }
            $ids = rtrim($ids, ",");
             /*$query = "SELECT id, gear_id, path FROM images WHERE gear_id IN (".$ids.")";
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute();
           
            if($result){
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    if(!isset($arr[$row["gear_id"]]["dates"])){
                        $arr[$row["gear_id"]]["dates"] = array();
                    }
                    array_push($arr[$row["gear_id"]]["dates"], $row);
                    
                }
            }
            
            
             while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    if(!isset($arr[$row["id"]]["name"])){
                        $arr[$row["id"]]["name"] = array();
                    }
                    array_push($arr[$row["id"]]["name"], $row);
                    
                }*/
          
            return $arr;
            
        } else {
            return false;
        }
    }
    
    function getSchedule(){
       
        $result = false;
        $query = "SELECT * FROM booking LEFT JOIN slots ON slot_id=slots.id LEFT JOIN rooms ON room_id=rooms.id";
        if(isset($this->data["id"])){
           // echo $this->data["id"];
            $query .= " WHERE room_id = :id";
        
                 $query .= " AND date = '2016-05-29'";
                 $date =  date("Y-m-d", strtotime($this->data["date"])) ;
               // echo  $result;
                 $stmt = $this->db->prepare($query);
                // $result = $stmt->execute(array(":id"=>$this->data["id"], ":date"=>$date));
                $result = $stmt->execute(array(":id"=>$this->data["id"]));
            
                       
        }  else {
            $query .= " ORDER BY id DESC";
            //echo $query;
            $stmt = $this->db->prepare($query);
            $result = $stmt->execute();
            
        }
       
      if($result){
           $arr = array();
                       
            if($result){
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    if(!isset($arr[$row["date"]])){
                        $arr[$row["date"]] = array();
                    }
                 
                 
                  // $row = array($row['slot']=>$row)
                $arr[$row["date"]][$row['slot_id']] = $row;  
                //array_push($arr[$row["date"]], $row);
                    //$new = array_merge( $arr[$row["date"]], array( $row["slot"] => $row) );

                }
            }
            
            
             /*while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                    if(!isset($arr[$row["date"]]["slot"])){
                        $arr[$row["date"]]["slot"] = array();
                    }
                    array_push($arr[$row["date"]]["slot"], $row);
                    
                }*/
            //var_dump($arr);
           return $arr;
            
        } else {
            return false;
        }
    }
 
    
}
/*$user = new Userdb($db);
$user->set(array(
    "username"=>"WHAT",
    "password"=>"lololol"
));
$user->insert();*/

/*$testObject = new Geardb($db);

$testObject->get();*/
?>
