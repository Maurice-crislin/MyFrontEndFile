let obj={a:1,b:2,[Symbol()]:123};//symbol作为key同样都不能获取
let prototype={wuhu:999};
Object.setPrototypeOf(obj,prototype);//设置__Proto__的规范写法
let res=[];
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        res.push(key);
    }
}
console.log(res,Object.keys(obj));//[ 'a', 'b' ] [ 'a', 'b' ]
console.log(res.toString()===Object.keys(obj).toString());//true
