var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '首页',
    })
})

//注册界面
router.get('/regist', function(req, res, next) {
    res.render('regist', {
        title: '注册',
    })
})

//登录
router.get('/login', function(req, res, next) {
    res.render('login', {
        title: '登录',
    })
})

//发表文章
router.get('/post', function(req, res, next) {
    res.render('post', {
        title: '发表文章',
    });
})

module.exports = router;
