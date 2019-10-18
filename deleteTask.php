<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);

    include('./pdolink.php');

    try{
        $sql = $db->prepare('delete from task where t_id=:id');
        $sql->bindValue('id',$data->taskID);
        $sql->execute();
        
        echo 'Delete Task Success';
    }catch(Exceprtion $e){
        echo 'ErrorMessage：' . $e->getMessage();
    }