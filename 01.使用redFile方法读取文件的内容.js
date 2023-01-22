// 1、导入fs模块来操作文件
const fs = require('fs');
// 2、调用fs.readFile()方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式，一般默认指定utf8
// 参数3：回调函数，拿到读取失败和成功的结果  err dataStr
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // 打印失败的结果
    // 如果读取成功,则err的值为null
    console.log(err);
    console.log('-------');
    // 打印成功的结果
    console.log(dataStr);
})