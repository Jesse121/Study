<?php
//第三个参数是表示cookiess在客户端保存多长时间按秒计算
//若不写则cookies不会保存，绘画结束cookies失效
//只能保存字符串
setcookie("name","jesse",time()+30);
setcookie("passward","131978",time()+50);
setcookie("adress","深圳",time()+50);
echo "success";
?>