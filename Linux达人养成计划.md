### Linux简介
linux与windows区别

* linux严格区分大小写
* linux中所有内容以文件形式保存，包括硬件
* linux不靠扩展名区分文件类型

### Linux常用命令

命令 【选项】 【参数】
cp -r 复制目录及目录里的文件

find 【搜索范围】 【搜索条件】

### 压缩
常用压缩格式 
.zip .gz .bz2 .tar.gz .tar.bz2

压缩文件  zip 压缩文件名 源文件名  
压缩目录及文件 zip -r 压缩文件名 源文件名

解压文件 unzip 压缩文件名

### mount 挂载

mount 挂载光盘  
mount /dev/sr0 /mnt/cdrom/
mount 卸载光盘  
unmount /mnt/cdrom/

mount 挂载U盘  
mount -t vfat /dev/sdb1 /mnt/usb/

ctrl+l 清屏   