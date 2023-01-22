const path = require('path');
// 定义文件的存放路径
const fpath = '/a/b/c/index.html';
// 获取路径的最后一部分
var fullName = path.basename(fpath);
// 输出 indexedDB.html
console.log(fullName);

// 只输出文件名，不输出拓展名
var nameWithoutExt = path.basename(fpath,'.html');
// 输出 index
console.log(nameWithoutExt);