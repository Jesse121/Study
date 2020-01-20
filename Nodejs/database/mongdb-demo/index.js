/*
 * @Date: 2019-09-14 09:14:48
 * @LastEditors: Jesse
 * @LastEditTime: 2019-09-14 09:52:49
 */
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/article'
/* 连接mongodb */
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log('connect failed')
        console.log(err)
        return 
    }
    console.log('connect success')
})
/** 定义schema */
const ArticleSchema = new mongoose.Schema({
    title:String,
    author:String,
    content:String,
    publistTime:Date
})
mongoose.model('Article',ArticleSchema)
const Article = mongoose.model('Article')

// /**将文档插入到集合中 */
// var art = new Article({
//     title:'node.js',
//     author:'Jesse',
//     content:'mode.js is great!',
//     publistTime:new Date()
// })
// art.save(function(err){
//     if(err){
//         console.log('save failed')
//         console.log(err)
//     }else{
//         console.log('save successed')
//     }
// })

/**查询mongodb */
// Article.find({title:'node.js'},function(err,docs){
//     if(err){
//         console.log('error')
//         return
//     }
//     /**修改 */
//     docs[0].title = 'javascript'
//     docs[0].save()
//     console.log('result:'+docs)
// })

/**查询mongodb */
Article.find({title:'node.js'},function(err,docs){
    if(err){
        console.log('error')
        return
    }
    /**删除数据 */
    if(docs){
        docs.forEach(function(ele){
            ele.remove()
        })
    }
    console.log('result:'+docs)
})