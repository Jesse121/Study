var fs = require('fs'),stdin = process.stdin,stdout=process.stdout
fs.readdir(process.cwd(),function(err,files){
    console.log('')//先输出空行，分隔开
    if(!files.length){
        return console.log('\033[31m No files to show!\033[39m\n')
    }
    console.log('select which file or directory you want to see\n')
    var stats = [];
    function file(i){
        var filename = files[i]
        fs.stat(__dirname + '/' + filename,function(err,stat){
            stats[i] = stat
            if(stat.isDirectory()){//如果是目录
                console.log(i+'    \033[36m'+filename + '/\033[39m');
            }else{
                console.log(i+'    \033[90m'+filename+'\033[39m')
            }
            if(++i == files.length){
                read()
            }else{
                file(i)
            }
        })
    }
    file(0)
    function read(){
        console.log('')
        stdout.write('\033[33mEnter your choice: \033[39m')
        stdin.resume()//等待用户输入
        stdin.setEncoding('utf8')
        stdin.on('data',option)
    }

    function option(data){
        var filename = files[Number(data)]
        if(!filename){
            stdout.write('\033[33mEnter your choice: \033[39m')
        }else{
            stdin.pause()
            if(stats[Number(data)].isDirectory()){//如果是目录
                fs.readdir(__dirname+'/'+filename,function(err,files){
                    console.log('')
                    console.log('   ('+file.length+'files)')
                    files.forEach(function(file){
                        console.log('   -   '+file)
                    })
                    console.log('')
                })
            }else{
                fs.readFile(__dirname+'/'+filename,'utf8',function(err,data){
                    console.log('')
                    console.log('\033[90m'+data.replace(/(.*)/g,'   $1')+'\033[39m')
                })
            }
        }
    }
})

