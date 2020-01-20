var express = require("express");
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get("/", function(req, res, next) {
    axios.get('http://api.map.baidu.com/telematics/v3/weather?location=%E5%98%89%E5%85%B4&output=json&ak=TIRG9BtwIhNX9LMtpIRPUzEajP1wPmkP')
    .then(resp=>{
        console.log('res',resp)
        // let data = resp.data
        // if(data.errno === 0){
        //     console.log(data.data)
        //     res.render('index', { title: 'Express' ,data:data.data});
        // }
        res.end()
    })
    .catch(err=>{
        console.warn('err',err)
        res.end()
    })


});

module.exports = router;
