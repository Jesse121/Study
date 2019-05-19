#### nginx的压缩输出配置
```
# 开启gzip
gzip  on;
# 启用gzip压缩的最小文件
gzip_min_length 1k;
gzip_buffers 4 16k;
gzip_http_version 1.1;
# gzip 压缩级别
gzip_comp_level 2;
# 进行压缩的文件类型。
gzip_types text/plain application/x-javascript application/css  text/css application/xml text/javascript application/x-httpd-php
gzip_vary on;
```

#### Nginx配置静态资源跨域访问
```
location / {
    add_header Access-Control-Allow-Origin http://php.jesse.com; //只允许的域名
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS; //只允许的方法
    root   /var/www/php;
    index  index.html index.htm;
}
```

#### Nginx配置静态资源防盗链
```
location ~ .*\.(jpg|gif|png)$ {
    valid_referers none  blocked php.jesse.com;
    if ($invalid_referer) {
        return 403;
    }
}
```

#### Nginx 静态资源缓存设置
```
location ~ .*\.(php|htm|html)$ {
    add_header Cache-Control no-cache;
    add_header Pragma no-cache;
}
location ~ .*\.(css|js|swf)$ {
    add_header Cache-Control max-age=600;
}
location ~ .*\.(jpg|gif|png)$ {
    expires 3d;
}
```


Cache-Control与Expires的作用一致，都是指明当前资源的有效期，控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据。只不过Cache-Control的选择更多，设置更细致，如果同时设置的话，其优先级高于Expires。

**http协议头Cache-Control** 
值可以是public、private、no-cache、no- store、no-transform、must-revalidate、proxy-revalidate、max-age
各个消息中的指令含义如下：

* Public 指示响应可被任何缓存区缓存。
* Private 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效。
* no-cache 告诉浏览器、缓存服务器，不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验。
* no-store 请求和响应消息都不使用缓存。
* max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。
* must-revalidate告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验

### Nginx 配置SSL及Http跳转到Https
下面是简化的创建自签名证书流程，需要安装openssl，使用以下步骤：

* 创建Key；
* 创建签名请求；
* 将Key的口令移除；
* 用Key签名证书。

#### 生成私钥
使用openssl工具生成一个RSA私钥
`openssl genrsa -des3 -out server.key 1024`
参数说明：生成rsa私钥，des3算法，1024位强度，server.key是秘钥文件名。
#### 生成CSR（证书签名请求）
`openssl req -new -key server.key -out server.csr`
生成证书签署请求文件之后，就可以进行证书签名了，而这个时候可以有两种选择。
第一种，就是你把这个CSR文件，发送给权威的CA机构，由他们进行验证和正式签名，这种方式签名后的证书就是得到权威机构进行验证的，具备有效性，效果就是所有客户端的浏览器都能认可你的证书，但是这种方式是收费的。

第二种，自建CA，自签证书，意思就是自己给自己签署证明，很显然，这种方式的签署证书，就不能得到权威验证，无法具备公认的有效性，所以如果客户端访问，会显示证书无效，或者不安全之类的，这种方式是免费的，一般内部测试或者使用的话，用这种方式就可以了。

#### 删除私钥中的密码
在第1步创建私钥的过程中，由于必须要指定一个密码。而这个密码会带来一个副作用，那就是在每次nginx启动时，都会要求输入密码，这显然非常不方便。要删除私钥中的密码，操作如下：
`openssl rsa -in server.key.org -out server.key`

#### 生成自签名证书
`openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt`

##### 原80端口做301转跳
```
server {
    listen 80;
    server_name php.jesse.com;
    return 301 https://php.jesse.com$request_uri;    #跳转到Https
}
```
由于用户习惯，通常准备访问某个网站时，在浏览器中只会输入一个域名，而不会在域名前面加上 http:// 或者 https://，而是由浏览器自动填充，当前所有浏览器默认填充的都是http://。一般情况网站管理员会采用了 301/302 跳转的方式由 HTTP 跳转到 HTTPS，但是这个过程总使用到 HTTP 因此容易发生劫持，受到第三方的攻击。这个时候就需要用到 HSTS（HTTP 严格安全传输）。


##### 开启ssl功能
```
server {
    listen       443;
    server_name  php.jesse.com;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains"; # hsts
    root   /var/www/php;
    index  index.html index.htm;

    ssl                  on;
    ssl_certificate      /etc/nginx/ssl/server.crt;
    ssl_certificate_key  /etc/nginx/ssl/server.key;

    ssl_session_timeout  5m;

    ssl_protocols  SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
    ssl_prefer_server_ciphers   on;
}
```
