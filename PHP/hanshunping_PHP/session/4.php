<?php
/**
 *
 * @authors Jesse (jesse152@163.com)
 * @date    2017-05-15 07:51:29
 * @version $Id$
 */
//删除session文件
session_start();
session_destroy();
echo "全部删除";
