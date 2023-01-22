// 导入fs模块
const fs = require("fs");
// 导入path模块
const path = require("path");
// 定义正则表达式，分别匹配<style></style>和<script></script>
// \s表示空白字符；\S表示非空白字符； *表示任意次数  \/ \表示转译，防止跟后面斜线发生冲突
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 读取需要被处理的HTML文件
const fpath = path.join(__dirname, "./index.html");
// console.log(fpath);
fs.readFile(fpath, "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取HTML文件失败!" + err.message);
  }
  // 读取HTML文件成功后，调用对应的方法，拆解出css、js、html文件
  resolveCSS(dataStr);
  resolveJS(dataStr);
  resolveHTML(dataStr);
});

// 定义个自定义函数来处理css结构
function resolveCSS(htmlStr) {
  // 使用正则提取页面中的<style></style>标签
  // 以数组的形式来获取整个style标签里面的文本 如果exec()找到了文本，返回的是个数组，否则返回null
  const r1 = regStyle.exec(htmlStr);
  // 将提取出来的样式字符串，做进一步的处理 把style替换为空格
  // 此数组的第 0 个元素是与正则表达式相匹配的文本
  const newCSS = r1[0].replace("<style>", " ").replace("</style>", " ");
  // 将提取出来的css样式写入到index.css文件中
  var wpath = path.join(__dirname, "../时钟案例/index.css");
  fs.writeFile(wpath, newCSS, "utf8", function (err) {
    if (err) {
      return console.log("写入文件失败!" + err.message);
    }
    console.log("写入文件成功！");
  });
}

// 定义个自定义函数来处理js结构
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  const newJS = r2[0].replace("<script>", "").replace("</script>", "");
  var wpath2 = path.join(__dirname, "../时钟案例/index.js");
  fs.writeFile(wpath2, newJS, "utf8", function (err) {
    if (err) {
      return console.log("写入javaScript脚本失败!" + err.message);
    }
    console.log("写入javaScript脚本成功!");
  });
}

// 定义个自定义函数来处理html结构
function resolveHTML(htmlStr) {
    // 把整个页面中<style></style>内容替换为link标签
    // 把整个页面中<script></script>内容替换为 <script src=''></srcipt>标签
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="index.css">')
    .replace(regScript, '<script src="index.js"></script>');
    var wpath3 = path.join(__dirname,'../时钟案例/时钟.html');
    fs.writeFile(wpath3,newHTML,'utf8',function(err){
        if(err){
            return console.log('写入HTML页面失败!' + err.message);
        }
        console.log('写入HTML页面成功！');
    })
}
