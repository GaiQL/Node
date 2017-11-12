

      // 对象方法，如果类生成一个实例，那么该实例就能使用该方法
      // 类方法，不需要通过生成实例就可以使用的方法。



function People(name){
  this.name=name;
  //对象方法
  this.Introduce=function(){
    alert("My name is "+this.name);
  }
}
//类方法
People.Run=function(){
  alert("I can run");
}
//原型方法
People.prototype.IntroduceChinese=function(){
  alert("我的名字是"+this.name);
}
