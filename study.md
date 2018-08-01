webpack vue-cli
vue源码 vue-router vuex
React
小程序  
nginx
gitlab jeakins


nodejs express
es6 
前端性能优化 编写页面性能提升方案，通过自动化测试从时间上直接体现优化结果
TypeScript
websocket  
独立架构网站前端


#### 网络TCP建立连接为什么需要三次握手而结束要四次？
已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。

#### 四次挥手是有谁发起的？一定要四次吗？
断开tcp连接可以是客户端也可以是服务端,不一定是四次挥手
https://blog.csdn.net/kkgbn/article/details/77859881
被断开的一端没有数据要发送直接发送了ACK和FIN。这种情况通过抓包发现很常见。也就是四个过程也变为了三次握手。

#### tcp链接keep-alive保持连接多久？
/proc/sys/net/ipv4/tcp_keepalive_time 开始首次KeepAlive探测前的TCP空闭时间 默认7200
/proc/sys/net/ipv4/tcp_keepalive_intvl 两次KeepAlive探测间的时间间隔  默认75
/proc/sys/net/ipv4/tcp_keepalive_probes 判定断开前的KeepAlive探测次数 默认9
对于一个已经建立的tcp连接。如果在keepalive_time时间内双方没有任何的数据包传输，则开启keepalive功能的一端将发送 keepalive数据包，若没有收到应答，则每隔keepalive_intvl时间再发送该数据包，发送keepalive_probes次。一直没有 收到应答，则发送rst包关闭连接。若收到应答，则将计时器清零。

#### 网关如何获取远程ip的mac地址？


Linux公社
http2.0 monogodb  
redis
php
python

picturefill提供了针对picture标签和srcset属性的兼容 这俩支持设备分辨率不同加载不同图片

### wireshark使用教程
#### 7层OSI参考模型各个层次上的典型网络协议
|层次|协议|
|----|----|
|应用层|HTTP SMTP FTP Telnet|
|表示层|ASCII MPEG JPEG MIDI|
|会话层|NetBIOS SAP SDP NWLink|
|传输层|TCP UDP SPX|
|网络层|IP IPX|
|数据链路层|Ethernet|



### 如何调试nodejs

1. npm install -g node-inspector
2. node --debug-brk ***.js
3. 在另一个命令行中 node-inspector


### spy-debugger
#### 安装
npm install spy-debugger -g  
#### 使用方法

1. 手机和PC保持在同一网络下（比如同时连到一个Wi-Fi下）
2. 命令行输入spy-debugger，按命令行提示用浏览器打开相应地址。
3. 设置手机的HTTP代理，代理IP地址设置为PC的IP地址，端口为spy-debugger的启动端口(默认端口：9888)。
Android设置代理步骤：设置 - WLAN - 长按选中网络 - 修改网络 - 高级 - 代理设置 - 手动
iOS设置代理步骤：设置 - 无线局域网 - 选中网络 - HTTP代理手动
4. 手机安装证书。注：手机必须先设置完代理后再通过(非微信)手机浏览器访问http://spydebugger.com/cert安装证书(手机首次调试需要安装证书，已安装了证书的手机无需重复安装)。
5. 用手机浏览器访问你要调试的页面即可。 


### 查询80端口被哪个程序占用
```
netstat -aon|findstr "80" //查询出pid
tasklist|findstr "2720" //根据pid查询出程序名
```

### xshell常用命令
打开会话：alt+o  
切换会话：shift+tab  
减小字号：ctrl+shift+alt+[  
增大字号：ctrl+shift+alt+]  

复制：ctrl+insert  
粘贴：shift+insert  
查找：ctrl+e+f  
撤销：Ctrl+x+u  

Ctrl + a/Home 切换到命令行开始  
Ctrl + e/End 切换到命令行末尾  
Ctrl + l 清除屏幕内容，效果等同于clear  
Ctrl + u 清除剪切光标之前的内容  
Ctrl + k 剪切清除光标之后的内容  
Ctrl + y 粘贴刚才所删除的字符  
Ctrl + r 在历史命令中查找 （这个非常好用，输入关键字就调出以前的命令了）  
Ctrl + c 终止命令  
ctrl + o 重复执行命令  
Ctrl + d 退出shell，logout  
Ctrl + z 转入后台运行,但在当前用户退出后就会终止  
Ctrl + t 颠倒光标所在处及其之前的字符位置，并将光标移动到下一个字符  
Alt + t 交换当前与以前单词的位置  
Alt + d 剪切光标之后的词  
Ctrl+w 剪切光标所在处之前的一个词（以空格、标点等为分隔符）  
Ctrl+（x u） 按住Ctrl的同时再先后按x和u，撤销刚才的操作  
Ctrl+s 锁住终端  
Ctrl+q 解锁终端 



### yum针对软件包操作常用命令： 
1.使用YUM查找软件包 
命令：yum search 
2.列出所有可安装的软件包 
命令：yum list 
3.列出所有可更新的软件包 
命令：yum list updates 
4.列出所有已安装的软件包 
命令：yum list installed 
5.列出所有已安装但不在 Yum Repository 内的软件包 
命令：yum list extras 
6.列出所有软件包的信息 
命令：yum info 
7.列出所有可更新的软件包信息 
命令：yum info updates 
8.列出软件包提供哪些文件 
命令：yum provides






 jesse:113a4c0708529d527b4a0ca706e600d7f8





ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDOnURcqSt/ZQT6tYtEzj85BWOFdgm9rP4NzqutQnU/NofbTboQNuT0qGkLgIio1WhZuPy1bG1KmpMSVen0es6Ua7XDpMKULItW9FzBUYG9JID+3msaJOD08FbWck5xXH7Du5PGJDjvTTbYgPthdRbBRlup3no5rUx7Wz02LIb7Sur8hUnBS9pD3CMqYaBG0RHABWY+moUFiHfQrAK8DD/45xiYNS1vK87wRTvCxUeC7k3xsV7pvsoCPMySRrXkFIBfHlH+aiDSfjpXxM1/dPwP9Q/rJE+gtuiUAUDhPDWrwfWuutKPKOxUt7Wgkf8ZwmfUZCcF4TTCSAZaWw8JOboIYck3qON0l5fmFXxDynT9uJaXyJ7B/675/0XJ9ju8lyDJEab0rQYDMM9YwTonWAuMKfPsjdBDB0j2PRXo8m+voCVQp1N9Xm1V4/y/SsluPPL4BUjvvR212rnGwk9+50lQtORdoL2QhvtNpKjEMS4iC5+tjtLI8CkWZHOD8F06hlvfQ5MXKrIUjdv6Jj7nIob+0KW2OWj6bK8qG2jZbaNqQ2BPHkFeEMAuJoLHazKjmNXuZUDYoancI21lvnppjdEWIeQrI4m3/DbA3aKWT/zX1tO4a6zl8+anw02wE9hR9SOswDzqjJjyX/pT+nVDX8W6V2YforNnZ3cm7FUpkC2hxQ== jesse152@163.com



-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----



rm -rf /home/vagrant/guojiang/overseas2/overseas/src/;
rm -rf /home/vagrant/guojiang/overseas2/overseas/html/src/;

cp -rf dist/** /home/vagrant/overseas/dist/;
cp -rf html/dist/** /home/vagrant/overseas/html/dist/;
