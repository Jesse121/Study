<?php
 //mysql扩展库操作mysql数据库步骤如下
   //1. 获取连接
   $conn=mysql_connect("127.0.0.1","root","131978");
   if(!$conn){
       die("连接失败".mysql_error());
   }
   //2. 选择数据库
   mysql_select_db("test");
   //3. 设置操作编码(建议有)!!!
   mysql_query("set names utf8"); //保证我们的php程序是按照utf8码操作.
   //4. 发送指令sql (ddl 数据定义语句 , dml(数据操作语言 update insert ,delete) ,dql (select ), dtl 数据事务语句 rollback commit... )
   //增加数据操作  返回bool类型 无需释放资源
   //$sql = "INSERT INTO user1 (name,password,email,age) VALUES ('小明',md5('123'),'xiaoming @sohu.com',34)";
   //删除数据操作 返回bool类型 无需释放资源
   //$sql = "DELETE FROM user1 WHERE id=6";
   //查询数据操作 返回资源类型
   // $sql="select * from user1";
   //更改数据操作 返回bool类型 无需释放资源
   $sql = "UPDATE user1 SET age=100 WHERE id=4";
   //$res 表示结果集，你可以简单的理解就是 一张表.
   $res=mysql_query($sql,$conn);
   var_dump($res); //mysql result 资源类型
   
   //5. 接收返回的结果，并处理.(显示)
   // mysql_fecth_row 会依次取出$res结果集的下一行数据,赋值给$row
   // $row就是一个数组, 样式array(5) { [0]=> string(1) "1" [1]=> string(2) "zs" [2]=> string(32) "e10adc3949ba59abbe56e057f20f883e" [3]=> string(11) "zs@sohu.com" [4]=> string(2) "30" } 
  //mysql_fetch_assoc mysql_fetch_array
    // while($row=mysql_fetch_row($res)){
    // //第一种取法是 同 $row[$i]
    // //echo "<br/> $row[0]--$row[1]--$row[2]";
    // //echo "<br/>";
    // // var_dump($row);
    // //第二种取法
    //     foreach($row as $key => $val){
    //         echo "--$val";
    //     }
    //     echo "<br/>";
    // } 
    //6.释放资源，关闭连接
    // mysql_free_result($res);
    //关闭连接,无需写会自动关闭
    mysql_close($conn);
?>