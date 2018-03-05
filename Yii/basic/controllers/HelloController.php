<?php
namespace app\controllers;

use Yii;
use yii\web\Controller;

class HelloController extends Controller{

    public function actionIndex(){
        // $redis = Yii::$app->redis;

        // // 判断 key 为 username 的是否有值，有则打印，没有则赋值
        // $key = 'username';
        // if ($val = $redis->get($key)) {
        //     var_dump($val);
        // } else {
        //     $redis->set($key, 'marko');
        //     $redis->expire($key, 5);
        // }
        $redis = 'e';
        return $this->render('index',[
            'redis'=>$redis
        ]);
    }


}
