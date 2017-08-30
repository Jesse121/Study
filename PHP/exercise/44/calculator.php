<?php
/**
 * 
 * @authors Jesse (jessework131@163.com)
 * @date    2016-08-03 21:07:09
 * @version $Id$
 */
$num1 = $_REQUEST["num1"];
$num2 = $_REQUEST["num2"];
$oper = $_REQUEST["oper"];
$result = 0;
switch($oper){
	case"+":
		$result = $num1 + $num2;
		break;
	case"-":
		$result = $num1 - $num2;
		break;
	case"*":
		$result = $num1 * $num2;
		break;
	case"/":
		$result = $num1 / $num2;
		break;
	default:
		echo "运算符不正确";
}
echo "计算结果为：".$result;
?>