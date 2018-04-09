<?php
<<<<<<< HEAD
/**
* 
*/
namespace app\controllers;
use yii\web\Controller;
use yii\web\Cookie;

class HelloController extends Controller{
    public function actionIndex(){
        // $request = \YII::$app->request;
        // echo $request->get('id',20);
        // echo $request->userIp;
        // echo 'HelloWorld!';

        // $session = \YII::$app->session;
        // $session->open();
        // if($session->isActive){
        //     echo 'session is active';
        // }
        // $session->set('user','jesse');
        // echo $session->get('user');

        // $cookies = \YII::$app->response->cookies;
        // $cookies_data = array('name'=>'user','value'=>'jesse');
        // $cookies->add(new Cookie($cookies_data));

        // $test = 'hwllo world!';
        // return $this->renderPartial('index',Array(
            // 'test'=>$test
        // ));

        //查询数据
        $sql = select * from test where id=1;
        $result = Test::findBySql($sql)->all();
        
        print_r($result);
    }

}



=======
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
>>>>>>> 65d878c1d7013fc8a100a4c8d46cbc2109cb9b38
