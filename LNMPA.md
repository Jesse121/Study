---
title: CentOS 服务器环境搭建：Linux + Apache + MySQL + PHP + Nginx
date: 2018-02-11 08:08:12
categories:
- PHP
tags:
- Linux CentOS Apache Nginx PHP MySQL
---
从事前端开发已3年有余，越来越发现前端开发要学习的知识已不仅仅是html+css+js那么简单了，2017年市场上就有了大前端的概念，可以说对前端工程师的要求也越来越高了，从招聘的要求中可以看到熟悉一门后端语言可以说是标配了。由于目前公司用的后台语言是PHP，借此机会充分锻炼了我的PHP技能。如今不仅要对PHP语言熟悉，还要熟悉公司整个架构，今天我通过在WIN7上安装的虚拟机上练习了下搭建LNMPA架构，顺便做下笔记。

<!-- more -->

#### 前提准备
需要在官网上下载以下软件

* [CentOS](http://isoredirect.centos.org/7/ios/x86_64/CentOS-7-x86_64-Minimal-1708.iso) 这里选择aliyun的镜像
* [Virtual Box](https://www.virtualbox.org/wiki/Downloads) 这里选择5.2.8版本
* [xshell5](https://www.netsarang.com/download/down_form.html?code=522) 这里选择可以免费使用的Home & School user

### 安装CentOS系统

1. 安装virtual box虚拟机
2. 新建虚拟机电脑，输入名称CentOS,然后一直选择下一步
3. 启动CentOS,选择启动盘时，选择我们下载好的CentOS镜像文件后，点击启动
4. 进入安装界面，选择Install CentOS 7
5. 安装过程中设置好语言，安装位置(磁盘分区选择默认)和网络(打开以太网连接),设置好后点击开始安装
6. 安装过程中设置root密码及创建用户,安装完成后点击重启

### 设置固定ip方便xshell远程登录
#### 网卡设置
网卡设置前先查询主机的网络ip   
cmd ipconfig /all  
分别记下本地连接的ipv4地址、子网掩码、网关  
登录centos虚拟主机后  
```
cd /etc/sysconfig/network-scripts/
ls
```
一般第一个就是自己的网卡，我这里是ifcfg-enp0s3
```
vi ifcfg-enp0s3
```
添加以下内容
```
BOOTPROTO="dhcp"//改为"static"
IPADDR="10.0.5.100"//设置为与ipv4地址在同一网段
NETMASK="255.255.0.0"//设置子网掩码
GATEWAY="10.0.0.1"//设置网关
```
执行
```
systemctl restart network.service //重启网络  
```
此时测试主机和虚拟机是否可互相ping通

#### 开启22端口
```
firewall-cmd --zone=public --add-port=22/tcp --permanent //开启22端口
systemctl restart firewalld.service //重启防火墙
```
此时可在xshell上远程登录虚拟主机了
```
ssh username@10.0.5.100
```

### LAMP环境搭建
#### 安装Apache
```
sudo yum -y install httpd
```
安装完成后，修改配置文件，
```
vi /etc/httpd/conf/httpd.conf
```
把 ServerName 前的 # 去掉，并修改为：ServerName 127.0.0.1 并保存
重启apache
```
sudo apachectl restart
```
在主机浏览器中输入10.0.5.100即可看到apache测试页面(需要开启80端口)
#### 安装MySQL
```
sudo yum -y install mysql mariadb-server
```
安装完成后，启动 MySQL：
```
sudo systemctl start mariadb.service
```
接下来开始初始化 MySQL，并按照提示设置 MySQL中的 root 用户的密码及其他配置：
```
sudo mysql_secure_installation
```
配置如下
```
Enter current password for root (enter for none) （按回车）
Set root password? [Y/n]   （输入 Y：回车）
New password:              （输入新密码，回车）
Re-enter new password:     （再次输入新密码，回车）

Remove anonymous users? [Y/n]                （输入 Y：回车）
Disallow root login remotely? [Y/n]          （输入 Y：回车）
Remove test database and access to it? [Y/n] （输入 Y：回车）
Reload privilege tables now? [Y/n]           （输入 Y：回车）
```
登录mysql
```
mysql -u root -p
```

#### 安装 PHP7
安装epel
```
sudo yum -y install epel-release
```
更换rpm源
```
sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```
安装php7.0
```
sudo yum -y install php70w
```
安装结束后，重启 Apache
```
sudo apachectl restart 
```
在 Apache 的默认网站目录添加 phpinfo.php 文件，
```
vi /var/www/html/phpinfo.php 
//添加以下内容
<?php
phpinfo();
?>
```

#### 设置开机启动项
```
systemctl enable httpd.service
systemctl enable mariadb.service 
```
至此，LAMP 环境搭建完成！

### LNMP环境搭建
#### 安装 Nginx
此步骤接上，为了避免冲突，先关闭 Apache： sudo systemctl stop httpd.service 
CentOS 官方 rpm 源是没有 nginx 安装包的，需要手动添加，
```
cd /etc/yum.repos.d/
vi nginx.repo
```
往 nginx.repo 文件里添加如下代码：
```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch
gpgcheck=0
enabled=1
```
保存后，即可开始安装 Nginx，
```
sudo yum -y install nginx
```
安装结束后，启动 Nginx,记得先关闭 Apache
```
sudo systemctl start nginx.service
```
此时用浏览器访问10.0.5.100即可看到Welcome to nginx!

#### 安装PHP-FPM(FastCGI)
```
sudo yum -y install php-fpm
```
开启php-fpm
```
sudo systemctl start php-fpm.service
```
编辑 Nginx 的默认配置文件 default.conf
```
sudo vim /etc/nginx/conf.d/default.conf
```
把 default.conf 文件中 # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000 这一行下面的 # 注释去掉，并修改 root 后面的目录为：/usr/share/nginx/html;（此目录为 Nginx 的默认网站目录），修改 SCRIPT_FILENAME 后的参数为：$document_root$fastcgi_script_name; 
重启 Nginx, systemctl restart nginx.service   
同样，在 Nginx 的默认网站目录下添加 phpinfo.php 文件,在浏览器中可浏览php相关信息

#### 设置开机启动项
```
systemctl enable httpd.service
systemctl enable mariadb.service 
```
至此，LNMP 环境搭建完成！

### LNMP + Apache 架构配置：Nginx 做前端代理 + Apache 做后端服务

#### Apache优势与劣势
Apache用户基数大，稳定，兼容性高，在处理动态 php 页面时，mod_php 模块也比 php-cgi 模块更稳定更高效。  
Apache过于臃肿以及对静态文件响应过于缓慢让很多使用者感到头疼
#### Nginx优势与劣势
Nginx 对于高并发性能出众，Proxy 功能强效率高，占用系统资源少
Nginx在处理 php 脚本时需要通过 php-fpm(FastCGI) 解析，而 php-fpm 不够稳定，经常出现 502 错误，生成相对复杂的页面没有优势，反而会使 php-cgi 进程变为僵尸进程。

很多大型的网站都是采用 Nginx 前端 + Apache 后端的服务器架构，这样可以很好地结合了 Nginx 高并发和静态页面高效率以及 Apache 稳定的动态页面处理特点，再也不用担心 Nginx 以 FastCGI 模式运行 PHP 时的502问题和 Apache 处理静态页面过慢、负载过高的问题。

#### 配置 LNMP + Apache 架构
编辑 Nginx 的默认配置文件
```
sudo vim /etc/nginx/conf.d/default.conf
```
注释掉之前 FastCGI 监听的配置，并添加Apache对php脚本的监听
```
# proxy the PHP scripts to Apache listening on 127.0.0.1:80
#
location ~ \.php$ {
    proxy_pass   http://127.0.0.1:8080;
}

# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
#
#location ~ \.php$ {
#    root           /usr/share/nginx/html;
#    fastcgi_pass   127.0.0.1:9000;
#    fastcgi_index  index.php;
#    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
#    include        fastcgi_params;
#}
```
编辑 Apache 的配置文件
```
sudo vim /etc/httpd/conf/httpd.conf
```
找到 Listen 字段，并改为：Listen 127.0.0.1:8080，让 Apache 来监听这个端口，修改 Apache 的网站根目录为：/usr/share/nginx/html，与上述 Nginx 对应的网站目录保持一致

重启 Nginx ,Apache 服务,并确保这两个服务开机自启：
```
sudo systemctl restart httpd.service
sudo systemctl restart nginx.service
systemctl enable httpd.service
systemctl enable nginx.service
```

发现出现 502 Bad Gateway  
经查阅相关资料发现是由于开启了 selinux 服务导致的，关闭 selinux 即可。
```
sudo vim /etc/selinux/config
```
SELINUX=disabled

修改保存后，通过 reboot 命令重启 CentOS 服务器

至此，LNMP + Apache 架构配置完成！可通过浏览器查看http://10.0.5.100/phpinfo.php来确认

##### 参考文献
[Win7 下 VMware 虚拟机中安装 CentOS 服务器](https://kangzubin.com/blog/win7-vmware-centos/)
