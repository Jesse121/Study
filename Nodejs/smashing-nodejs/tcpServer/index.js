var net = require('net')
var count = 0,users={}

var server = net.createServer(function(conn){
    conn.write(
        '\n > welcom to \033[92mnode-chat\033[39m!'
        +'\n > '+count+' other people are connected at this time.'
        +'\n > please write your name and press enter:'
    )
    count++
    conn.on('close',function(){
        count --
        delete users[nickname]
        broadcast(nickname+' left the room\n')
    })

    conn.setEncoding('utf8')
    var nickname
    conn.on('data',function(data){
        data = data.replace('\r\n','')
        if(!nickname){
            if(users[data]){
                broadcast('>'+ nickname+' already in use. try again\n')
                return
            }else{
                nickname = data;
                users[nickname] = conn
                broadcast('>'+ nickname+' joined the room\n')
            }
        }else{
            broadcast('\033[96m > '+nickname+':\033[39m'+data+'\n',true)
        }
    })
    function broadcast(msg,exceptMyself){
        for(var i in users){
            if(!exceptMyself || i != nickname){
                users[i].write(msg)
            }
        }
    }
})
server.listen(3000,function(){
    console.log('server listening on 3000')
})

