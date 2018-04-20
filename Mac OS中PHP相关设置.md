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

### zip相关操作
```
zip -q -r -e -m -o [yourName].zip someThing
```
-q 表示不显示压缩进度状态
-r 表示子目录子文件全部压缩为zip  //这部比较重要，不然的话只有something这个文件夹被压缩，里面的没有被压缩进去
-e 表示你的压缩文件需要加密，终端会提示你输入密码的
// 还有种加密方法，这种是直接在命令行里做的，比如zip -r -P Password01! modudu.zip SomeDir, 就直接用Password01!来加密modudu.zip了。
-m 表示压缩完删除原文件
-o 表示设置所有被压缩文件的最后修改时间为当前压缩时间

当跨目录的时候是这么操作的
```
zip -q -r -e -m -o '\user\someone\someDir\someFile.zip' '\users\someDir'
```
#### 解压
tar -xzvf ***.tar.gz
