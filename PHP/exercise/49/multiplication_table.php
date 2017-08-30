<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <title>乘法表</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Jesse">
    <link href="" rel="stylesheet">
</head>

<body>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
	<label for="num">请输入0~9之间的任意整数</label>
	<input type="text" name="num" id="num">
	<br>
	<br>
	<input type="hidden" name="action" value="submitted">
	<input type="submit" value="得出结果">
</form>
<div>
	<?php
	if(isset($_POST['action']) && $_POST['action'] == "submitted"){
		$res = $_POST["num"];
		if($res < 0 || $res > 10){
			echo "Illegal numbers";
		}else{
			multiplication($res);
		}
	}
	function multiplication($n){
		for($i = 1;$i <= $n;$i++){
			for($j = 1;$j <= $i;$j++){
				echo "$i*$j=".$i*$j."&nbsp;";
			}
			echo "<br>";
		}
	}
	?>
</div>
</body>

</html>