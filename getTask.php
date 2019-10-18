<?php
    include('./pdolink.php');
    
    $sql = $db->query('select * from task');
    
    $result = $sql->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);