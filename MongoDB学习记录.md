## MongoDB学习记录
### MongoDB的安装(以CentOS7为例)
第一步 查看是否存在Mongodb配置yum源
切换到yum目录 cd /etc/yum.repos.d/
查看文件 ls
第二部 不存在添加yum源
创建文件 touch mongodb-3.4.repo
编辑该文件 vi mongodb-3.4.repo
内容 ：
```
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.2.asc
```
这里可以修改 gpgcheck=0, 省去gpg验证

然后： yum  install -y mongodb-org

查看mongo安装位置 whereis mongod
查看修改配置文件 ： vi /etc/mongod.conf

启动mongod ：systemctl start mongod.service
停止mongod ：systemctl stop mongod,service

外网访问需要关闭防火墙：
CentOS 7.0默认使用的是firewall作为防火墙，这里改为iptables防火墙。
关闭firewall：
systemctl stop firewalld.service #停止firewall
systemctl disable firewalld.service #禁止firewall开机启动

#### Nodejs连接MongoDB数据库及增删查改操作
[Nodejs操作MongoDB](http://www.runoob.com/nodejs/nodejs-mongodb.html)


#### mongoose
https://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral
