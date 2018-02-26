<?php
/**
 * Index控制器
 */
class IndexController extends Controller
{
    // public function filters(){
    //     return array(
    //         array(
    //             'system.web.widgets.COutputCache + index',//开启整页缓存
    //             'duration'=> 30,
    //             'varyByParam'=> array('aid')
    //         ),
    //     );
    // }
    /**
     * 默认方法 
     * @return [type] [description]
     */
    public function actionIndex()
    {
        $articleModel = Article::model();
        $sqlNew = "SELECT thumb,aid,title,info FROM {{article}} WHERE type=0 ORDER BY time DESC";
        $articleNew = $articleModel->findAllBySql($sqlNew);
        
        $sqlHot = "SELECT thumb,aid,title,info FROM {{article}} WHERE type=1 ORDER BY time DESC";
        $articleHot = $articleModel->findAllBySql($sqlHot);
        $data = array(
            'articleNew' => $articleNew,
            'articleHot' => $articleHot
        );
        $this->render('index',$data);
    }

}
