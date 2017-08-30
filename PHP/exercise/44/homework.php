<?php
/**
 * 
 * @authors Jesse (jesse152131@163.com)
 * @date    2016-08-03 21:50:32
 * @version $Id$
 */
//输出九九乘法表 要求对齐
for($i = 1;$i <= 9;$i++){
	for($j = 1;$j <= $i;$j++){
		echo "$j*$i=".$i*$j."&nbsp;";
	}
	echo "<br>";
}
	echo "<br>";
	echo "<br>";

$sum = 3 + 5;
echo $sum;
echo "<br>";
echo $sum/2;
echo "<br>";
$bool = $sum/2 > 5;
print_r((int)$bool);
echo "<br>";
$dif = 3 - (int)$bool;
echo $dif;
echo "<br>";
echo 5*$dif;
echo "<br>";
echo 3+5*$dif;




?>