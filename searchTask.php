<?php
    include('./pdolink.php');
    $sql = $db->prepare('select * from task where t_taskname=:name or t_taskcontent=:content or t_taskstatus=:status');
    $sql->bindValue('name',$_GET['taskName']);
    $sql->bindValue('content',$_GET['taskContent']);
    $sql->bindValue('status',$_GET['taskStatus']);
    $sql->execute();

    echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));