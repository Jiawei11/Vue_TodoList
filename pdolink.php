<?php
    $db = new PDO('mysql:host=localhost;dbname=todolist','root','');
    $db->exec('set names utf8');