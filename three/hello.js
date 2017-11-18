// exports.word = () => {
//   console.log('hello word!!!')
// }

function hello(){
  var name;
  this.setName = (namez) => {
    name = namez;
  }
  this.sayHello = () => {
    console.log('Hello ' + name);
  }
}

module.exports = hello ;
