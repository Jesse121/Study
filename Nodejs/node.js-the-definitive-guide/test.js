var timer = setInterval(function(param){
    console.log(param)
    console.log(__dirname)
    clearTimeout(timer)
    // timer.unref()
},2000,'aaa')
exports.timer = timer
