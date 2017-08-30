<?php
/**
 * 
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-14 17:31:17
 */
class Cat{
	function opeartion($num1,$num2,$opear){
		$result = 0;
		switch($opear){
			case "+":
				$result = $num1 + $num2;
			break;
			case "-":
				$result = $num1 - $num2;
			break;
			case "*":
				$result = $num1 * $num2;
			break;
			case "/":
				$result = $num1 / $num2;   //需要优化
			break;
		}
		return $result;
	}

	function retangleArea($length,$width){
		return $length * $width;
	}

	function circleArea($radius){
		return round(pow($radius,2)*pi(),2);
	}
}
?>