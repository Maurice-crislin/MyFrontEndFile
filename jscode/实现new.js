function myNew(construct,...args){
    let obj={};//创建一个新对象
    obj.__proto__=construct.prototype;//将新对象的[[prototype]]指向原型对象
    construct.apply(obj,args);// 将构造函数的this指向新对象   调用构造函数给新对象添加属性
    return obj;
}
function constructFn(name,age){
    this.name=name;
    this.age=age;
}

let obj1=myNew(constructFn,"keke",20);
let obj2=new constructFn("keke",20);