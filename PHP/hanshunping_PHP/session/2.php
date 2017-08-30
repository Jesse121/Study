<?php
//1.初始化session
session_start();
//获取session
echo "<pre>";
if (!empty($_SESSION)) {
    print_r($_SESSION);
} else {
    echo "没有session";
}
echo "<br/>";
echo $_SESSION["name"];
echo "</pre>";
