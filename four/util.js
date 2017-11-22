/*

  util提供常用的函数集合
  util.inherits()是一个实现对象间原型继承的函数

  util.inspect(object,[showHidden],[depth],[colors])将任意对象转换为字符串的方法
  object  要转换的对象，
  showHidden  如果值为true，则会输出更多的信息。
  depth  表示最大递归层数，不指定时默认递归两层，指定为null会完整遍历对象
  colors 值为true时，输出格式将会以ANSI颜色编码，好看。
  特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，
  即使该对 象定义了toString 方法也不会调用。

  util.isArray(object);
  如果给定的参数object是一个数组，返回true，否则返回false;

  util.isRegExp(object);
  如果给定的参数object是一个正则表达式返回true,否则返回false;

  util.isDate(object);
  如果给定的参数object是一个日期返回true,否则返回false;

  util.isError(object);
  如果给定的参数object是一个错误对象返回true,否则返回false;
*/
var util = require('util');
// function Base(){
//   this.name = 'base';
//   this.base = 1987;
//   this.sayHello = function(){
//     console.log('Hello ' + this.name);
//   }
// }
// Base.prototype.showName = function(){
//   console.log(this.name);
// }
// function Bas(){
//   this.name = 'haha';
// }
// util.inherits(Bas,Base);
// var heihei = new Bas();
// heihei.showName();

// function Person(){
//   this.name = 'haha';
//   this.toString = function(){
//     return this.name
//   }
// }
// var obj = new Person;
// console.log(util.inspect(obj,true));

console.log(util.isArray({}))
console.log(util.isRegExp(/hah/))
