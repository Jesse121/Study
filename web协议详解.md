### 使用telnet与服务器对话
Telent程序可以将键盘链接到某个目标的TCP端口，并将此TCP端口的输出送到显示屏
```
telnet php.jesse.com 80

GET / HTTP/1.1
Host: php.jesse.com

HTTP/1.1 200 OK
Server: nginx/1.14.2
Date: Sat, 18 May 2019 02:55:53 GMT
Content-Type: text/html
Content-Length: 383
Last-Modified: Wed, 15 May 2019 02:38:58 GMT
Connection: keep-alive
ETag: "5cdb7bc2-17f"
Cache-Control: no-cache
Pragma: no-cache
Accept-Ranges: bytes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
    <link rel="stylesheet" href="./manifest.5a769499.css">
</head>
<body>
    this is a test
    <script src="./test.js"></script>
</body>
</html>
```

#### HTTP首部字段Connection
