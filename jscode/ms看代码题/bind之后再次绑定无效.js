
var name='whuhuhu window';
var a = {
name: 'A',
fun: function(){console.log(this.name);}
};
a.fun();//'A'
let bindedFn = a.fun.bind({name: 'B'});
bindedFn.call({name: 'C'});//'B' bind之后，再次绑定无效
a.fun();//'A'
var fun1 = a.fun;
fun1();//whuhuhu window 在全局作用域下执行 此时this 是window
//在node下是undifined v8下是whuhuhu window        因为 node下没有window对象