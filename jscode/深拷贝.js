function clone(target,map=new WeakMap()){
    if(typeof target==='object'){
        if(map.has(target)){
            return map.get(target);
        } 
        let cloneObj=Array.isArray(target)?[]:{};
        map.set(target,cloneObj);
        for(let key in target){
            if(target.hasOwnProperty(key)){
                cloneObj[key]=clone(target[key],map);
            }
        }
        return cloneObj;//作为答案出口
    }else return target;
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    field5:function(){
        console.log("wuhuh")
    }
};
target.target = target;
let cloneObj=clone(target)
console.log(cloneObj);
cloneObj.field5();//"wuhuh"
cloneObj.field5=function(){
    console.log("111111111")
}
target.field5();//"wuhuh"
cloneObj.field5();//111111111