优化webpack工具 
移动端dll中去掉其他多余的内容。按需加载

es6 nginx
React react-router redux
vue源码 vue-router vuex

nodejs express
websocket  

前端性能优化 编写页面性能提升方案，通过自动化测试从时间上直接体现优化结果
独立架构网站前端
TypeScript




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


### github上fork的仓库如何保持更新？
1. 配置当前当前fork的仓库的原仓库地址  
git remote add upstream <原仓库github地址>
2. 查看当前仓库的远程仓库地址和原仓库地址  
git remote -v
3. 获取原仓库的更新。使用fetch更新，fetch后会被存储在一个本地分支upstream/master上  
git fetch upstream
4. 合并到本地分支。切换到本地master分支，合并upstream/master分支。  
git merge upstream/master
5. 如果需要自己github上的fork的仓库需要保持同步更新，执行git push进行推送  
git push origin master

### 小程序开发中注意点

`wx:key="*this"` 
保留关键字”*this”代表在 for 循环中的 item 本身，
这种表示需要 item 本身是一个唯一的字符串或者数字
用于组件仅需要一个属性，且属性值唯一。




### 工作收获
linux  nginx vue react webpack gitlab+jenkins php+mysql
