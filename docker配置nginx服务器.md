下载nginx
docker pull nginx
启动nginx images并进入后台
docker run -it nginx /bin/bash
通过查看linux发行版知晓用哪个包管理工具
cat /proc/version
Linux version 4.14.92-boot2docker (root@2c85d808f0f3) (gcc version 6.3.0 20170516 (Debian 6.3.0-18+deb9u1)) #1 SMP Wed Jan 9 22:03:23 UTC 2019

安装常用工具vim curl等
apt-get install vim
如果安装不了，命令提示如下
Reading package lists... Done
Building dependency tree       
Reading state information... Done
E: Unable to locate package vim

这时候需要敲：apt-get update，这个命令的作用是：同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引，这样才能获取到最新的软件包。
等更新完毕以后重新执行apt-get install vim命令即可。


设置ll别名
vi ~/.bashrc
添加下面这句
alias ll='ls $LS_OPTIONS -l'

#### docker端口映射
docker run -p 8080:80 -it nginx /bin/bash
在宿主机中访问localhost:8080即可看到nginx欢迎页面
**注意**
在window中宿主机是192.168.99.100，所以访问地址是http://192.168.99.100:8080

原因：docker是运行在Linux上的，在Windows中运行docker，实际上还是在Windows下先安装了一个Linux环境，然后在这个系统中运行的docker。也就是说，服务中使用的localhost指的是这个Linux环境的地址，而不是我们的宿主环境Windows。找到这个Linux的ip地址，一般情况下这个地址是192.168.99.100（docker-machine ip default 命令查找）
