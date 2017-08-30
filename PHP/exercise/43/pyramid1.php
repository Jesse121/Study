<?php
/**
 * 
 * @authors Jesse (jesse152@163.com)
 * @date    2016-08-03 21:35:38
 * @version $Id$
 */
//打印金字塔
$n = 5;
for ( $i = 1;$i <= $n;$i++ ) {
  for($k = 1;$k <= $n - $i;$k++){
    echo "&nbsp;";
  }
  for ( $j = 1;$j <= 2*$i - 1;$j++ ){
    echo "*";
  }
  echo "<br/>";
}
/*
    *
   ***
  *****
 *******
*********
 */
?>