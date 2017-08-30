<?php
//1.初始化session
session_start();
//2.保存数据
$_SESSION['name'] = "jesse";
$_SESSION['age']  = "25";
$arr1             = array("one", "two", "three");
$_SESSION['arr1'] = $arr1;

echo "ok";
