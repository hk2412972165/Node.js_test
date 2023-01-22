// 导入fs模块来读取文件
const fs = require('fs');
// 2、调用fs.readFile()方法读取文件
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // if(err)相当于  err满足条件时,也就是满足err == null时
    if(err){
        return console.log('文件读取失败!' +err.message);
    }else{
        console.log('文件读取成功,内容是:' + dataStr);
    }
})