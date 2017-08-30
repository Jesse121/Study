<?php
//打印空心金字塔
$n = 5;
for ( $i = 1;$i <= $n;$i++ ) {  //控制层数
  for($k = 1;$k <= $n - $i;$k++){  //控制空格数
    echo "&nbsp;";
  }
  for ( $j = 1;$j <= 2*$i - 1;$j++ ){ //控制星号数
    if($i == 1 || $i == $n){
        echo "*";
    }else{
        if($j == 1 || $j == 2*$i - 1){
            echo "*";
        }else{
            echo "&nbsp;";
        }
    }
  }
  echo "<br/>";
}
/*
    *
   * *
  *   *
 *     *
*********
 */
?>