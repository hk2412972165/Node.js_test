// 1、导入http模块
const http = require('http');
// 2、创建web服务器实例
const server = http.createServer();
// 3、为服务器实例绑定request事件，监听客户端的请求
// req是请求对象，包含了与客户端相关的数据和属性
// req.url是客户端请求的url地址
// req.method是客户端method请求类型
server.on('request',function(req,res){
    // res是响应对象，它包含了与服务器相关的数据和属性
    const url = req.url;
    const method = req.method;
    const str = 'Your request url is' + url + 'and request method is' + method
    console.log(str);
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str);
    // res.end()方法的作用，向客户端发送指定的内容，并结束这次请求的处理过程
})
// 4、启动服务器
server.listen(80,function(){
    console.log('http server running at http://127.0.0.1:80');
})