function f(){};
let a=f.prototype,b=Object.getPrototypeOf(f);
// a {constructor: ƒ}   是构造函数f的原型对象
// b  是 f.__proto__
console.log(a===b);//false

console.log(b==f.__proto__);//true