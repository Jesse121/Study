<?php
// echo time();
// echo "<br>";
// echo strtotime("now")."<br>";
echo print_r(getdate());

$user = <<<EOF

this is a test

EOF;
echo $user;
$res = "0";
if($res){
    echo "true";
}else{
    echo "false";
}
