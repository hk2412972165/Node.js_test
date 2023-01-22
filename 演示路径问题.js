// // 导入fs文件系统模块
// // 方法一
// const fs = require('fs');
// // 在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径动态拼接错误的问题
// fs.readFile('./files/1.txt','utf8',function(err){
//     if(err){
//         return console.log("读取文件失败!" + err.message);
//     }
//     console.log('文件读取成功！');
// })


// 导入fs文件系统模块
// 方法二  移植性差，不利于维护
// const fs = require('fs');
// // 在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径动态拼接错误的问题
// fs.readFile('E:\\kaifa\\nodejs_study\\files\\1.txt','utf8',function(err){
//     if(err){
//         return console.log("读取文件失败!" + err.message);
//     }
//     console.log('文件读取成功！');
// })

// 方法三 __dirname表示当前文件所处的目录
// console.log(__dirname);  显示的是当前js所处的路径
const fs = require('fs');
// 在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径动态拼接错误的问题
fs.readFile(__dirname + '/files/1.txt','utf8',function(err){
    if(err){
        return console.log("读取文件失败!" + err.message);
    }
    console.log('文件读取成功！');
})