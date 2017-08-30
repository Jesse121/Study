<?php
/**
 * 
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-05 21:58:57
 * @version $Id$
 */
$stature = $_REQUEST["stature"];
$weight = $_REQUEST["weight"];
$dif = $weight - ($stature - 105);
if($dif > 10){
	echo "您的体重超标，请注意减肥！";
}else if($dif < -10){
	echo "您的体重较轻，希望您能多吃点！";
}else{
	echo "恭喜您，您的体重正常，注意继续保持哦！";
}

?>