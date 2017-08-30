<?php
class Sqli{
    private $mysql;
    private static $host="localhost";
    private static $user="root";
    private static $pwd="131978";
    private static $db="test";

    public function __construct(){
        //完成初始化任务
        $this->mysqli= new mysqli(self::$host,self::$user,self::$pwd,self::$db);
        if($this->mysqli->connect_error){
            die("Connect Error".$this->mysqli->connect_error);
        }
        //保证php是以utf8码操作mysqli数据库
        $this->mysqli->query("SET NAMES UTF8");
    }
    public function exxcute_dql($sql){
        return $this->mysqli->query($sql) or die("操作dql".$this->mysqli->error);
    }
    public function execute_dml($sql){
        $res=$this->mysqli->query($sql) or die("操作dql".$this->mysqli->error);
        if(!$res){
            return 0;
        }else{
            if($this->mysqli->affected_rows>0){
                return 1;//操作成功
            }else{
                return 2;//操作成功没有航收到影响
            }
        }
    }
}

?>