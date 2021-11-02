//导入模块是require        类似于import Java.io
const http = require('http');
//创建HTTP服务
http.createServer(function (request, response) {
    //发送HTTP头部
    //HTTP状态值：200
    //内容类型：text/plain
    response.writeHead(200, { 'content-type': 'text/html' })
    //发送响应数据；“<stong>hello server<strong>”（给浏览器其输出内容）
    response.end('<stong>hello server<strong>')
}).listen(8888);//监听端口8888
//终端打印如下信息
console.log("Server running at http://locallhost:8888/")