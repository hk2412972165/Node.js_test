// 1、导入需要的fs文件系统模块
const fs = require('fs');
// 2、使用fs.readFile()方法，读取素材目录下的成绩.txt文件
fs.readFile('./files/成绩.txt','utf8',function(err,dataStr){
    // 3、判断文件是否读取失败
    if(err){
        return console.log('文件读取失败!' + err.message);
    }
        // console.log('文件读取成功，内容是：' + dataStr);

    // 4、文件读取成功后，处理成绩数据
    // 拿到的是一个字符串：
    // （1）将成绩的字符串形式转换为数组形式（先把成绩的数据，按照空格进行分割）
    const arrOld = dataStr.split(' ')
    // console.log(arrOld); [ '小红=99', '小白=100', '小黄=70', '小黑=66', '小绿=88' ]
    // （2）将数组进行循环处理，每循环一次把数组里面的等号替换为冒号
    // 循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = [];
    // foreach又称增强for，是for循环的一个特殊简化版 是es6语法中的一种特定写法
    // (item => {}  相当于function(item){}
    arrOld.forEach(item => {
        arrNew.push(item.replace('=','：'))
    })
    // （3）将处理过的数组进行拼接再合并成一个完整的字符串
    // 把新数组中的每一项，进行合并，得到一个新的字符串
    const newStr = arrNew.join('\r\n');
    // console.log(newStr);


// 5、将处理完成的成绩数据，调用fs.writeFile()方法，写入到新文件成绩-ok.txt中
    fs.writeFile('./files/成绩-ok.txt',newStr,function(result){
        if(result){
            return console.log('文件写入失败！' + result.message);
        }
        console.log('文件写入成功！');
    })

})
