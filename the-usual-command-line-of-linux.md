---
title: 工作中常用的Linux命令行
date: 2017-10-18 07:05:49
categories:
- Linux
tags:
- Linux
---


<!-- more -->
### 常用指令
|命令     |     作用 |
|---------|----------|
|ls　　   |显示文件或目录|
|ls   -l |列出文件详细信息l(list)|
|ls   -a |列出当前目录下所有文件及目录，包括隐藏的a(all)|
|pwd     |显示当前目录|
|mkdir   |创建目录|
|rmdir   |删除空目录|
|cd      |打开目录|
|touch   |创建空文件|
|echo    |创建带有内容的文件|
|cat     |查看文件内容|
|cp      |拷贝|
|mv      |移动或重命名|
|rm      |删除文件|
|rm   -r |递归删除，可删除子目录及文件|
|rm   -f |强制删除|
|find    |在文件系统中搜索某文件|
|wc      |统计文本中行数、字数、字符数|
|grep    |在文本文件中查找某个字符串|
|tree    |树形结构显示目录，需要安装tree包|
|ln      |创建链接文件|
|more、less | 分页显示文本文件内容|
|head、tail |   显示文件头、尾内容|

#### 改变文件所有权限
chmod -R 777 *

#### date 输出日期时间
date -s 设置日期时间
例如：date -s "2017/11/11 00:00:00"

#### cal 输出当前日历


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



