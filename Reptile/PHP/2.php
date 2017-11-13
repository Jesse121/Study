<?php  
//搜索指定关键词的百度图片并显示  
$keyword = "海鸥";  
$keyword = urlencode($keyword);  
$url = "http://image.baidu.com/search/index?tn=baiduimage&word=" . $keyword;  
$html = file_get_contents($url);  
preg_match_all("/[^\"]*[^0]\.jpg/", $html, $text);  
 
// print_r($text[0]);

function download($url, $path = 'images/')
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    $file = curl_exec($ch);
    // print_r($file);exit;
    curl_close($ch);
    $filename = pathinfo($url, PATHINFO_BASENAME);
    $resource = fopen($path . $filename, 'a');
    fwrite($resource, $file);
    fclose($resource);
}
foreach ( $text[0] as $url ) {
    // echo $url.'<br>';
    download($url);
}
?> 