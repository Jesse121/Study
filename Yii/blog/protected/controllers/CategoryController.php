<?php
class CategoryController extends Controller{
    public function actionIndex($cid){
        $articleInfo = Yii::app()->cache->get('cate');//开启数据缓存
        if($articleInfo == false){
            $sql = "SELECT thumb,title,info,aid FROM {{article}} WHERE cid=$cid";
            $articleInfo = Article::model() -> findAllBySql($sql);
            Yii::app()->cache->set('cate',$articleInfo,2);
        }
        $this->render('index',array(
            'articleInfo'=> $articleInfo
        ));
    }
}
?>