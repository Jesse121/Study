<?php
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



