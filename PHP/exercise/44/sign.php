<?php
/**
 * 
 * @authors Jesse (jesse152131@163.com)
 * @date    2016-08-05 21:21:30
 * @version $Id$
 */
//验证用户登录
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
if($username === "jesse" || $password === "123456"){
	echo "您好".$username."<br>欢迎光临本店！";
}else{
	echo "用户名或密码错误！";
}


?>