<?php
/**
 * 四种基础排序算法的运行时间比较
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-11 07:12:14
 */
//冒泡排序法
function bubbleSort($array){
    $temp = 0;
    for($i = 0;$i < count($array) -1;$i++){
        for($j = 0;$j < count($array) - 1 -$i;$j++){
            if($array[$j] > $array[$j+1]){  //从小到大排列
                $temp = $array[$j];
                $array[$j] = $array[$j+1];
                $array[$j+1] = $temp;
            }
        }
    }
}
//选择排序法
function selectSort($array){
    $temp = 0;
    for($i = 0;$i < count($array) - 1;$i++){
        $minVal = $array[$i];  //假设$i就是最小值
        $minValIndex = $i;
        for($j = $i+1;$j < count($array);$j++){   
            if($minVal > $array[$j]){    //从小到大排列
                $minVal = $array[$j];     //找最小值
                $minValIndex = $j;
            }
        }
        $temp = $array[$i];
        $array[$i] = $array[$minValIndex];
        $array[$minValIndex] = $temp;
    }
}
//插入排序法
function insertSort($array){  //从小到大排列
    //先默认$array[0]，已经有序，是有序表  
    for($i = 1;$i < count($array);$i++){
        $insertVal = $array[$i]; //$insertVal是准备插入的数
        $insertIndex = $i - 1; //有序表中准备比较的数的下标
        while($insertIndex >= 0 && $insertVal < $array[$insertIndex]){
            $array[$insertIndex + 1] = $array[$insertIndex]; //将数组往后挪
            $insertIndex--; //将下标往前挪，准备与前一个进行比较
        }
        if($insertIndex + 1 !== $i){
            $array[$insertIndex + 1] = $insertVal;  
        }
    }
}
//快速排序法
function quickSort($array){
    if(!isset($array[1]))
        return $array;
    $mid = $array[0]; //获取一个用于分割的关键字，一般是首个元素
    $leftArray = array(); 
    $rightArray = array();
    foreach($array as $v){
        if($v > $mid)
            $rightArray[] = $v;  //把比$mid大的数放到一个数组里
        if($v < $mid)
            $leftArray[] = $v;   //把比$mid小的数放到另一个数组里
    }
    $leftArray = quickSort($leftArray); //把比较小的数组再一次进行分割
    $leftArray[] = $mid;        //把分割的元素加到小的数组后面，不能忘了它哦
    $rightArray = quickSort($rightArray);  //把比较大的数组再一次进行分割
    return array_merge($leftArray,$rightArray);  //组合两个结果
}

$a = array_rand(range(1,3000), 1600);  //生成1600个元素的随机数组
shuffle($a);  //打乱数组的顺序

$t1 = microtime(true);
bubbleSort($a);   //冒泡排序
$t2 = microtime(true);
echo "冒泡排序用时：".(($t2-$t1)*1000).'ms'."\n";

$t3 = microtime(true);
selectSort($a);   //选择排序
$t4 = microtime(true);
echo "选择排序用时：".(($t4-$t3)*1000).'ms'."\n";

$t5 = microtime(true);
insertSort($a);   //插入排序
$t6 = microtime(true);
echo "插入排序用时：".(($t6-$t5)*1000).'ms'."\n";

$t7 = microtime(true);
quickSort($a);  //快速排序
$t8 = microtime(true);
echo "快速排序用时：".(($t8-$t7)*1000).'ms';
?>