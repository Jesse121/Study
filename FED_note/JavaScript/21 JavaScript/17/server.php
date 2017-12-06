<?php
error_reporting(E_ALL^E_NOTICE);
if($_GET["username"]=="admin"){
	$msg="admin已经存在";
	$msg=iconv("gb2312","UTF-8",$msg);
	echo $msg;
}else{
	$msg=$_GET["username"]."可用";
	$msg=iconv("gb2312","UTF-8",$msg);
	echo $msg;

}
?>