Function.prototype.myCall=function(ctx,...arg){
    let ctxObj=(ctx===null||ctx===undefined)?window:Object(ctx);//ctx是null和undefined,会被忽略,实际应用的是默认绑定规则(在window上)
    let key=Symbol();
    ctxObj[key]=this;//将此函数方法赋给ctxObj作为属性值
    const res=ctxObj[key](...arg);//在  ctxObj(上下文对象) 上调用此函数
    delete ctxObj[key];// 删除这个属性  防止修改初始的ctx
    return res;
}

Function.prototype.myApply=function(ctx,arg = []){
    let ctxObj=(ctx===null||ctx===undefined)?window:Object(ctx);
    let key=Symbol();
    ctxObj[key]=this;//将此函数方法赋给ctxObj作为属性值
    const res=ctxObj[key](...arg);//在  ctxObj(上下文对象) 上调用此函数
    delete ctxObj[key];// 删除这个属性  防止修改初始的ctx
    return res;
}

Function.prototype.myBind=function(ctx,...arg1){//在bind阶段获得的第一部分参数
    const self=this;// self 指向 Function.prototype,self是初始函数方法
    const fn=function(...arg2){//在调用阶段获得的第二部分参数
        if(this.__proto__==fn.prototype){//是new调用的后果,this指向新对象,  新对象的[[prototype]]指向构造函数fn的prototype对象
            return new self(...arg1,...arg2);
        }
        return  self.myCall(ctx,...arg1,...arg2);// 因为上面已经实现了call,这里就借用一下,实际上不借用就是把代码copy过来
    }
    return fn;
}
// bind和apply的区别在于,bind是返回一个绑定好的函数,apply是直接调用.其实想一想实现也很简单,就是返回一个函数,里面执行了apply上述的操作而已.
//不过有一个需要判断的点,因为返回新的函数,要考虑到使用new去调用,并且new的优先级比较高,所以需要判断new的调用,
//还有一个特点就是bind调用的时候可以传参,调用之后生成的新的函数也可以传参,效果是一样的,所以这一块也要做处理



var age = 10
var obj = {
  age: 20,
}
function foo(a, b) {
  console.dir(this.age + a + b);
}

foo(3, 4) // => 17
foo.myCall(obj, 3, 4) //=> 27
foo.myApply(obj, [3, 4]) //=> 27

foo.bind(obj,3)(4);// => 27
foo.myBind(obj,3)(4);// => 27



//展示 new绑定 比 显示绑定(call,apply,bind) 优先级高的demo
//new可以修改 已硬绑定this的 函数的this

function constructFn(name,age){
    this.name=name;
    this.age=age;
}

let obj1={};

let afterBindFn1=constructFn.bind(obj1);//绑到obj1上了

afterBindFn1('keke',20);//在obj上 添加属性

let obj2=new afterBindFn1('cc',25);//如果真不能改，返回值是空对象，但显然不是

console.log(obj1,obj2);
// obj1 {name: 'keke', age: 20}
// obj2 constructFn {name: 'cc', age: 25}


let obj3={};

let afterBindFn2=constructFn.myBind(obj3);//绑到obj3上了

afterBindFn2('keke',20);//在obj3上 添加属性

let obj4=new afterBindFn2('cc',25);//如果真不能改，返回值是空对象，但显然不是

console.log(obj3,obj4);
// obj3 {name: 'cc', age: 25}
// obj4 constructFn {name: 'cc', age: 25}
