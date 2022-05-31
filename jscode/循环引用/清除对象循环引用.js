//如果一个对象的值等于父级(祖父级，曾祖父级....),则说明是循环引用了

function cycle(obj,parent=[obj]){
    for(let key in obj){
        if(Object.prototype.toString.call(obj[key])!=='[object Object]')continue;//如果obj[key]不是对象，根本不用去测试循环引用
        if(parent.some((item)=>item==obj[key])){obj[key]='cycle';continue;}
        cycle(obj[key],[...parent,obj[key]]);
    }
}

let obj1={
    a:{
        b:{
            c:{
                
            }
        }
    }
}
obj1.a.b.c=obj1;

let obj2={
    a:{
        b:{
            
        }
    }
}
obj2.w=obj1;

let obj3={
    a:{
        b:{
            
        }
    },
    e:obj2
}


console.log(cycle(obj1),cycle(obj2),cycle(obj3));
console.log(obj1,obj2,obj3);