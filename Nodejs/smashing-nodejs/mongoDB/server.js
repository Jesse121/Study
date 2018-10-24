var express = require('express')
,mongodb = require('mongodb')
,server = new mongodb.Server('127.0.0.1',27017)
,app = express.createServer();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret:'my secret'}));

app.set('view engine','jade');
app.set('view options',{layout:false});


new mongodb.Db('my-website',server).open(function(err,client){
    if(err) throw err
    console.log('connected to mongodb')
    app.users = new mongodb.Collection(client,'users')
})


app.get('/',function(req,res){
    res.render('index',{authenticated:false})
})

app.get('/login',function(req,res){
    res.render('login')
})

app.get('/signup',function(req,res){
    res.render('signup')
})


app.listen(3000,function(){
    console.log('app listening on 127.0.0.1:3000')
})