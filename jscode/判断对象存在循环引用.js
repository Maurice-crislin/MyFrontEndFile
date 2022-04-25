//如果一个对象的值等于父级(祖父级，曾祖父级....),则说明是循环引用了

function cycleTest(obj, parentArr=[obj]){
    for(let key in obj){
        if(Object.prototype.toString.call(obj[key])!=='[object Object]')continue;//如果obj[key]不是对象，根本不用去测试循环引用
        if(parentArr.some((item)=>item==obj[key])||cycleTest(obj[key],[...parentArr,obj[key]]))return true;
        //如果这一轮发现 对象的子值 等于 对象的祖先，那么说明循环引用了，即时返回true
        //如果下一轮发现循环引用，即时返回true中止循环
        //cycleTest(obj[key],[...parentArr,obj[key]])需要把所有的祖先放入数组
    }
    return false;
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


console.log(cycleTest(obj1),cycleTest(obj2),cycleTest(obj3));//true true true