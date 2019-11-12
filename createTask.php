<?php
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    
    include('./pdolink.php');
    $sql = $db->prepare('insert into task(t_taskname,t_taskcontent,t_taskstatus) values(:name,:content,:status)');
    $sql->bindValue('name',$data->taskName);
    $sql->bindValue('content',$data->taskContent);
    $sql->bindValue('status',$data->taskStatus);
    $sql->execute();

    echo "新增完成。";