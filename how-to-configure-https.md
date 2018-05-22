---
title: 如何配置HTTPS 
date: 2018-05-22 08:38:28 
categories: 
- WEB
tags: 
- https
---


<!--more-->
### 生成自签证书

sudo openssl genrsa  -out server.key 2048

sudo openssl req -new -x509 -days 1826 -key server.key -out server.crt

### 修改apache配置
apache2.4
需开启的模块
LoadModule ssl_module libexec/apache2/mod_ssl.so
LoadModule socache_shmcb_module libexec/apache2/mod_socache_shmcb.so
配置虚拟主机
Include /private/etc/apache2/extra/httpd-vhosts.conf

sudo vim httpd-ssl.conf
```
<VirtualHost *:443>
    DocumentRoot "/var/www/html"
    ServerName www.domain.com:443
    SSLEngine on
    SSLCertificateFile /usr/local/apache/conf/server.crt
    SSLCertificateKeyFile /usr/local/apache/conf/server.key
</VirtualHost>
```

检测配置文件是否有错误
sudo apachectl configtest 
重启apache
sudo apachectl restart

### apache配置重定向