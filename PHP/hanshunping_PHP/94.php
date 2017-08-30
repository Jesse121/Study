<?php
    header("Content-type: text/html;charset=utf-8");
    //mysql操作mysql数据库(面向对象风格)
    
    //1.创建mysql 对象
    $mysql=new mysqli("localhost","root","131978","test");
    //验证是否ok
    if($mysql->connect_error){
        die("连接失败".$mysql->connect_error);
    }
    //2. 操作数据库(发送sql)
    //增加数据操作，返回bool值无需关闭资源
    //$sql = "INSERT INTO user1 (name,password,email,age) VALUES ('小红',md5('aaa'),'xiaohong@sohu.com',8)";
    //删除数据操作，返回bool值，无需关闭资源
    //$sql = "DELETE FROM user1 WHERE id = 5";
    //查询数据操作，返回资源结果集
    //$sql="select * from user1";
    //$res 是结果集.mysql result
    //跟新数据操作，返回bool值无需关闭资源
    $sql = "UPDATE user1 SET age = 56 WHERE id = 4";
    $res=$mysql->query($sql);
    //var_dump($res);
    //3. 处理结果 mysql_fetch_row();
    // while($row=$res->fetch_row()){
    //    foreach($row as $key=>$val){
    //         echo "--$val";
    //    }
    //    echo "<br/>";
    // }
    //4. 关闭资源
    //释放内存
    // $res->free();
    //关闭连接
    $mysql->close();
?>