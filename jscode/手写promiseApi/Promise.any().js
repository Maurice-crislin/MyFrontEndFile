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
let promiseReject1=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>reject("当下子promise失败了"),1000);
})}
let promiseReject2=function(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>reject("当下子promise失败了"),6000);
})}


Promise.any([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu",promiseReject1()])
.then((firstRes)=>console.log('总promise成功，第一个决议成功的promise的决议值是',firstRes))//wuhuhuuuhhu
.catch((err)=>{console.log('总promise失败',err)});

Promise.any([promiseReject1(),promiseReject2()])
.then((firstRes)=>console.log('总promise成功，第一个决议成功的promise的决议值是',firstRes))
.catch((aggregateError)=>{console.log('总promise失败','AggregateError',aggregateError,'AggregateError.errors',aggregateError.errors)});
//总promise失败 
//AggregateError AggregateError: All promises were rejected 
//AggregateError.errors (2) ['当下子promise失败了', '当下子promise失败了']