<?php
/**
 * 文章管理控制器
 */
class ArticleController extends Controller{
    public function actionIndex($aid){
        $articleInfo = Article::model()->findByPK($aid);
        $this-> render('index',array('articleInfo'=>$articleInfo));
    }
}
?>