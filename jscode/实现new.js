function myNew(construct,...args){
    let obj={};//创建一个新对象
    obj.__proto__=construct.prototype;//将新对象的[[prototype]]指向原型对象
    // 将构造函数的this指向新对象   调用构造函数给新对象添加属性
    const returnVal=construct.apply(obj,args);
    return (Object.prototype.toString.call(returnVal)=='[object Object]'?returnVal:obj);// 如果函数没有返回其他对象，那么自动返回新对象；若返回其他对象(必须得是对象)，就把其他对象返回
}
function constructFn1(name,age){
    this.name=name;
    this.age=age;
    return null;
}

let obj1=myNew(constructFn1,"keke",20);
let obj2=new constructFn1("keke",20);
console.log(obj1,obj2);

function constructFn2(name,age){
    this.name=name;
    this.age=age;
    return 'wuhu';
}

obj1=myNew(constructFn2,"keke",20);
obj2=new constructFn2("keke",20);
console.log(obj1,obj2);


function constructFn3(name,age){
    this.name=name;
    this.age=age;
    return {a:'wuhu'};
}

obj1=myNew(constructFn3,"keke",20);
obj2=new constructFn3("keke",20);
console.log(obj1,obj2);//被构造调用的函数有返回值且是一个对象，那么new表达式的返回值就是这个对象