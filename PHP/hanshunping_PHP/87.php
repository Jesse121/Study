<?php
/**
 * [fileDown description]
 * @param  [type] $file_name    [文件名称]
 * @param  [type] $file_sub_dir [下载文件子路径]
 * @return [type]               [返回文件数据]
 */
function fileDown($file_name,$file_sub_dir){
    //对文件名中的中文进行转码
    $file_name = iconv("utf-8","gb2312",$file_name);
    //文件绝对路径
    $file_path = $_SERVER['DOCUMENT_ROOT'].$file_sub_dir.$file_name;
    if(!file_exists($file_path)){
        echo "文件不存在！";
        return ;    
    }
    //文件指针
    $fp = fopen($file_path, "r");
    //文件大小 
    $file_size = filesize($file_path);
    //返回的文件类型
    header("Content-type: application/octet-stream");
    //按照字节返回
    header("Accept-Ranges: bytes");
    header("Accept-Length: $file_size");
    //浏览器弹出对话框 对应文件名
    header("Content-Disposition: attachment;filename=".$file_name);
    //向客户端回送数据
    $buffer = 1024;
    //为了下载的安全，最好做一个文件字节读取计数器
    $file_count = 0;
    while(!feof($fp) && ($file_size - $file_count > 0)){
        $file_data = fread($fp,$buffer);
        //统计读了多少个字节
        $file_count += $buffer;
        echo $file_data;
    }
    //关闭文件
    fclose($fp);
}

fileDown("截图.jpg","study/php/exercise/");
?>