<?php
/**
 * 
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-14 17:24:35
 */
require_once 'area.class.php';
$doing = $_POST['doing'];
$cat = new Cat();
if($doing == "opeartion"){
	$num1 = $_POST['num1'];
	$num2 = $_POST['num2'];
	$opear = $_POST['opear'];
	$result1 = $cat -> opeartion($num1,$num2,$opear);
	echo "计算结果为：".$result1;
}else if($doing == "retangle"){
	$length = $_POST['length'];
	$width = $_POST['width'];
	$result2 = $cat -> retangleArea($length,$width);
	echo "计算结果为：".$result2;
}else if($doing == "circle"){
	$radius = $_POST['radius'];
	$result3 = $cat -> circleArea($radius);
	echo "计算结果为：".$result3;
}
?>
<br/>
<a href='SmartCat.html'>返回主界面</a>