/*********************** 原生promise表现 ***********************/

let promise1=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(111),5000);
})}
let promise2=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(222),4000);
})}
let promise3=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(333),3000);
})}
let promise4=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(4444),2000);
})}
let promiseReject=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>reject("当下子promise失败了"),1000);
})}


Promise.allSettled([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu",promiseReject()])
.then((results)=>results.forEach((result)=>console.log(result.status,result.value||result.reason)))
.catch((err)=>{console.log('总promise失败',err)});
//对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。
//如果值为 rejected，则存在一个 reason 。
//value（或 reason ）反映了每个 promise 决议（或拒绝）的值。


// > "fulfilled" 111
// > "fulfilled" 222
// > "fulfilled" 333
// > "fulfilled" 4444
// > "fulfilled" "wuhuhuuuhhu"
// > "rejected" "当下子promise失败了"