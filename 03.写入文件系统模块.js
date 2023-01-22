// 1、导入fs模块来读取文件
const fs = require('fs');
// 2、调用fs.writeFile()方法，写入文件的内容
// 参数1：表示文件的存放路径
// 参数2：表示要写入的内容
// 参数3：表示以什么格式写入文件，是个可选参数，默认格式为utf8
// 参数4：回调函数
fs.writeFile('./files/2.txt','world node.js!',function(err){
    // 如果文件写入成功，则err的值等于null
    // console.log(err);
    if(err){
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功!');
})




