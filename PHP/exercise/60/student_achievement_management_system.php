<?php
/**
 * 
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-13 20:42:20
 */

$studentsScore = array(60,66,89,88,56,98,100,84,88,76);
$do = $_REQUEST['do'];
if($do == "printScore"){
	$ID = $_REQUEST['ID'];
	echo "学号为 $ID 的学生的成绩为：".$studentsScore[$ID];
}else if($do == "printID"){
	$score = $_REQUEST['score'];
	if(in_array($score,$studentsScore)){
		for($i = 0;$i < count($studentsScore);$i++){
			if($score == $studentsScore[$i]){
				echo "成绩为 $score 的学生的学号为：".$i."<br>";
			}
		}
	}else{
		echo "sorry,没有该分数的学生！";
	}
}else if($do == "studentsState"){
	$array = array(0,0,0,0,0);
	for($i = 0;$i < count($studentsScore);$i++){
		if($studentsScore[$i] >= 0 && $studentsScore[$i] <= 59){
			$array[0]++;
		}else if($studentsScore[$i] >= 60 && $studentsScore[$i] <= 69){
			$array[1]++;
		}else if($studentsScore[$i] >= 70 && $studentsScore[$i] <= 79){
			$array[2]++;
		}else if($studentsScore[$i] >= 80 && $studentsScore[$i] <= 89){
			$array[3]++;
		}else if($studentsScore[$i] >= 90 && $studentsScore[$i] <= 100){
			$array[4]++;
		}
	}
	echo "成绩为不及格的学生人数为：".$array[0]."<br>成绩为差的学生人数为：".$array[1]."<br>成绩为中的学生人数为：".$array[2]."<br>成绩为良的学生人数为：".$array[3]."<br>成绩为优的学生人数为：".$array[4];
}else if($do == "deleteScore"){
	$ID = $_REQUEST['ID'];
	$studentsScore[$ID] = null;
	echo "学号为 $ID 的学生的成绩已删除";
}
?>