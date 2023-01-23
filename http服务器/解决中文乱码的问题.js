// 1、导入http模块
const http = require('http');
// 2、创建web服务器实例
const server = http.createServer();
// 3、为服务器实例绑定request事件，监听客户端的请求
server.on('request',function(req,res){
    const url = req.url;
    const method = req.method;
// 发送的内容包含中文
const str = '您请求的url地址是' + req.url + '请求的method类型是' + req.method;
// 为了防止中文显示乱码问题，需设置响应头Content-Type的值为text/html;charset=utf-8
res.setHeader('Content-Type','text/html; charset=utf-8')
// 把包含中文的内容，响应给服务端
res.end(str);
})
// 4、启动服务器
server.listen(80,function(){
    console.log('http server running at http://127.0.0.1:80');
})