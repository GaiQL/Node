var tools = require('tools'); /*省略.js也是可以的*/

/* 引入的模块在当前目录没有时，Node.js会在文件下的node_modules里面找这个模块 */


/*

  引入nav模块，nav在根目录中不存在，去node_modules，找到了nav文件夹，
  nav文件夹下面有package.json时，就会去找package.json的入口文件"main":"nav.js"

  npm安装的模块就是这样引入的;

  package.json文件通过进入文件夹运行  npm init --yes 生成

*/
console.log(tools.add(1,2));

console.log(tools.sayHello());
