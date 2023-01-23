// 1、导入需要的模块 http fs path
const http = require('http');
const fs = require('fs');
const path = require('path');
// 2、创建基本的web服务器
const server = http.createServer();
// 为服务器实例绑定request事件，监听客户端的请求
server.on('request',(req,res) => {
    const url = req.url;

    // 把请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname,'../时钟案例/index.html')
    // 优化
    // 预定义空白的文件存放路径
    let fpath = '';
    if(url === '/'){
        // 如果请求的路径是否为/，则手动指定文件的存放路径 ../时钟案例/时钟.html
        fpath = path.join(__dirname,'../时钟案例/时钟.html')
    }else{
        // 如果请求的路径不为/，则动态拼接文件的存放路径 /index.html
        fpath = path.join(__dirname,'../时钟案例',url)
    }

    // 根据映射过来的文件路径读取文件
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        if(err){
            // 读取文件失败后，向客户端响应固定的错误信息
            return res.end('404 Not found!')
        }
        // 读取文件成功后，将“读取成功的内容”响应给客户端
        res.end(dataStr);
    })
})
// 启动服务器
server.listen(80,() => {
    console.log('http server running at http://127.0.0.1:80');
})