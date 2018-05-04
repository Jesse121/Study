### Mac中Apache相关设置
本文中Mac均指Mac OS High Sierra 10.13.3
#### 开启Apache服务
mac默认安装了apache2.4
```
sudo apachectl start/restart   #启动apache
sudo apachectl stop            #停止apache
```
### 修改默认网站根目录
apache配置文件路径 /etc/apache2/

#### 开启虚拟主机
1. 将Include /private/etc/apache2/extra/httpd-vhosts.conf这行前的注释符号＃去掉。
2. 编辑httpd-vhosts.conf文件
```
<VirtualHost *:80>
    ServerAdmin webmaster@xiaohua.com
    DocumentRoot "/Users/yournameDev/xiaohua.com"
    ServerName xiaohua.com
    ErrorLog "/Users/yourname/Dev/xiaohua.com/error_log"
    CustomLog "/Users/yourname/Dev/xiaohua.com/access_log" common
    <Directory "/Users/yourname/Dev/xiaohua.com">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
```
3.  修改host文件
sudo vim /etc/hosts
添加 127.0.0.1 www.xiaohua.com

#### 开启虚拟主机后localhost无法访问
将localhost配置一个虚拟机即可

### Mac中PHP相关设置
#### 重装PHP
```
brew install php71 --with-cgi --with-debug --with-mysql
```
php的安装位置在/usr/local/opt/php@7.1/bin
php扩展文件夹位置/usr/local/Cellar/php@7.1/7.1.16/pecl/20160303/

#### php安装扩展
pecl.php.net下载扩展
tar -zxvf 解压扩展
cd 扩展包
phpize
./configure --with-php-config=/usr/local/opt/php@7.1/bin/php-config
make && make install
修改/usr/local/etc/php/7.1/php.ini 添加扩展

#### 开启PHP
sudo vim /etc/apache2/httpd.conf
加载PHP模块,去掉LoadModule php7_module libexec/apache2/libphp7.so，前的#
建立PHP的配置文件：cp /etc/php.ini.default /etc/php.ini
sudo apachectl restart

### Mac中安装MySQL
下载安装包，安装好后需
添加环境变量

1. 进入/usr/local/mysql/bin,查看此目录下是否有mysql
2. 执行vim ~/.bash_profile
    在该文件中添加mysql/bin的目录
    PATH=$PATH:/usr/local/mysql/bin
添加完成后，按esc，然后输入wq保存。
3. 最后在命令行输入source ~/.bash_profile


