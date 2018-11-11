var readline = require('readline')
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('what is your name?',function(answer){
    console.log('my name is ',answer)
    rl.close()
})
rl.question('how old are you?',function(answer){
    console.log("I'm ",answer)
    rl.close()
})