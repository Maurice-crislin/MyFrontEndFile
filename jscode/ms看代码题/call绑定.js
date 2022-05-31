
var name='whuhuhu window';
var a = {
name: 'A',
fun: function(){console.log(this.name);}
};
a.fun();//'A'
a.fun.call({name: 'B'});//'B'
a.fun();//'A' 之前的call不会影响之后执行的函数
var fun1 = a.fun;
fun1();//whuhuhu window 在全局作用域下执行 此时this 是window
//在node下是undifined v8下是whuhuhu window        因为 node下没有window对象



var b = {
name: 'A',
fun: () => {console.log(this.name);}//箭头函数的this是定义位置的父作用域的this，也就是window
};
b.fun();// whuhuhu window  
b.fun.call({naame: 'B'});//whuhuhu window 对箭头函数进行显示绑定无效
var fun1 = b.fun;
fun1();//whuhuhu window