let obj={a:1,b:2};
let prototype={wuhu:999};
Object.setPrototypeOf(obj,prototype);//设置__Proto__的规范写法
let res=[];
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        res.push(obj[key]);
    }
}
console.log(res,Object.values(obj));//[ 1, 2 ] [ 1, 2 ]
console.log(res.toString()===Object.values(obj).toString());//true
