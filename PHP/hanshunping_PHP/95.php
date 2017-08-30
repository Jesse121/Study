<?php
    require "sqli.class.php";
    header("Content-type: text/html;charset=utf-8");
    
    $sqli = new sqli();
    $sql = "INSERT INTO user1 (name,password,email,age) VALUES ('小红',md5('aaa'),'xiaohong@sohu.com',8)";
    $res = $sqli->execute_dml($sql);
    if($res==0){
        echo "fail";
    }else{
        if($res==1){
            echo "success";
        }else{
            echo "no affected";
        }
    }
?>