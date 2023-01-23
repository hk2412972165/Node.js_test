// 1、导入http模块
const http = require('http');
// 2、创建web服务器实例
const server = http.createServer();
// 3、为服务器实例绑定request事件，监听客户端的请求
server.on('request',(req,res) => {
    const method = req.method;
    // （1）获取请求的url地址
    const url = req.url;
    // （2）设置默认的响应内容为404 Not found
    let content = '<h1>404 Not found!</h1>'
    // （3）判断用户请求的是否为/或/index.html首页
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
    // （4）判断用户请求的是否为/about.html关于页面
        content = '<h1>关于页面</h1>'
    }
    // （5）设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // （6）res.end()把内容响应给客户端
    res.end(content)
})
// 4、启动服务器
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1:80');
})