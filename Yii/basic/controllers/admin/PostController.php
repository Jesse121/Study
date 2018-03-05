<?php

namespace app\controllers\admin;

use Yii;
use yii\web\Controller;

class PostController extends Controller{

    public function actionIndex(){
        $test ='test';
        return $this->render('index',[
            'test'=>$test
        ]);
    }

}
