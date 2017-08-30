<?php
/**
 * 
 * @authors Jesse (jessework131@163.com)
 * @date    2016-08-03 21:38:57
 * @version $Id$
 */
//打印菱形
/**
 * [printDiamond description]
 * @Author   Jesse
 * @DateTime 2016-08-05T20:32:13+0800
 * @param    [integer]                   $len [边长]
 */
function printDiamond($len){
  $n = 2*$len -1;
  for ( $i = 1;$i <= $n;$i++ ) {
    if($i <= ($n+1)/2){
      for($k = 1;$k <= ($n+1)/2 - $i;$k++){
        echo "&nbsp;";
      }
      for ( $j = 1;$j <= 2*$i - 1;$j++ ){
        if($i == 1){
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
    else{
      for($a = 1;$a <= $i - ($n+1)/2 ;$a++){
        echo "&nbsp;";
      }
      for ( $b = 1;$b <= 2*($n - $i + 1) - 1;$b++ ){
        if($i == $n){
          echo "*";
        }else{
          if($b == 1 || $b == 2*($n - $i + 1) - 1){
              echo "*";
          }else{
              echo "&nbsp;";
          }
        }
      }
      echo "<br/>";
    }
  }
}
printDiamond(6);

?>