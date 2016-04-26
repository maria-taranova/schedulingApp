<?php
try {
    $db = new PDO("mysql:dbname=space;host=localhost", "root", "root");
} catch (PDOException $e){
    echo "FAIL";
}
?>