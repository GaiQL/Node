/*

  util提供常用的函数集合
  util.inherits()是一个实现对象间原型继承的函数

*/
var util = require('util');
function Base(){
  this.name = 'base';
  this.base = 1987;
  this.sayHello = function(){
    console.log('Hello ' + this.name);
  }
}
Base.prototype.showName = function(){
  console.log(this.name);
}
function Bas(){
  this.name = 'haha';
}
util.inherits(Bas,Base);
var heihei = new Bas();
heihei.showName();
