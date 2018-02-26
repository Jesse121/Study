<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath'          => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name'              => 'My Web Application',

    // preloading 'log' component
    'preload'           => array('log'),
    // 设置默认访问IndexController
    'defaultController' => 'index',
    // autoloading model and component classes
    'import'            => array(
        'application.models.*',
        'application.components.*',
    ),

    'modules'           => array(
        // uncomment the following to enable the Gii tool
	        
	    // 'gii'=>array(
    	//     'class'=>'system.gii.GiiModule',
    	//     'password'=>'131978',
    	//     // If removed, Gii defaults to localhost only. Edit carefully to taste.
    	//     'ipFilters'=>array('127.0.0.1','::1'),
	    // ),
	    'admin',
	     
    ),

    // application components
    'components'        => array(

        'user'         => array(
            // enable cookie-based authentication
            'allowAutoLogin' => true,
            'loginUrl' => array('admin/login/index')
        ),
        'thumb' => array(
            'class'=> 'ext.CThumb.CThumb',
        ),
        'cache'=>array(
            'class'=>'system.caching.CFileCache'
        ),
        // uncomment the following to enable URLs in path-format
        
        // 'urlManager'=>array(
        //     'urlFormat'=>'path',
        //     // 'showScriptName'=>false, //去掉index.php
        //     'rules'=>array(
        //         // 'index.html'=>array('index'),
        //         'a/<aid:\d+>'=>array('article/index','urlSuffix'=>'.html'),//规则设置，后缀为.html
        //         'c/<cid:\d+>'=>array('category/index','urlSuffix'=>'.html'),
        //         //规则设置，后缀为.html
        //     ),
        // ),
         

        // database settings are configured in database.php
        'db'           => require (dirname(__FILE__) . '/database.php'),

        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),

        'log'          => array(
            'class'  => 'CLogRouter',
            'routes' => array(
                array(
                    'class'  => 'CFileLogRoute',
                    'levels' => 'error, warning',
                ),
                // uncomment the following to show log messages on web pages
                //打开调试信息
                // array(
                //     'class'=>'CWebLogRoute',
                //     'levels'=>'trace',     //级别为trace
                //     'categories'=>'system.db.blog' //只显示关于数据库信息,包括数据库连接,数据库执行语句
                // ),
             
            ),
        ),

    ),

    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params'            => array(
        // this is used in contact page
        'adminEmail' => 'jesse152@163.com',
    ),
);
