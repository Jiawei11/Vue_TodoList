<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    
    include('./pdolink.php');
    $sql = $db->prepare('update task set t_taskname=:name,t_taskcontent=:content,t_taskStatus=:status where t_id=:id');
    $sql->bindValue('name',$data->taskName);
    $sql->bindValue('content',$data->taskContent);
    $sql->bindValue('status',$data->taskStatus);
    $sql->bindValue('id',$data->taskID);
    $sql->execute();
    
    echo 'Update Task Success';