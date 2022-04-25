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

Promise.race([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu"])//wuhuhuuuhhu是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 wuhuhuuuhhu
.catch((err)=>{console.log('总promise失败',err)});

Promise.race([promise1(),promise2(),promise3(),promise4()])//promise4()是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 4444   
.catch((err)=>{console.log('总promise失败',err)});

Promise.race([promise1(),promise2(),promiseReject1(),promise3()])//promiseReject1()是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)}) 
.catch((err)=>{console.log('总promise失败',err)});//总promise失败 当下子promise失败了

Promise.race([promise1(),promise2(),promiseReject2(),promise3(),promise4()])//promise4()是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)}) //总promise的结果 4444
.catch((err)=>{console.log('总promise失败',err)});

Promise.race([promiseReject2(),promiseReject1()])
.then((res)=>{console.log('总promise的结果',res)})
.catch((err)=>{console.log('总promise失败',err)});//总promise失败 当下子promise失败了


//Promise.race返回最早决议的(决议成功或者失败)promise的结果
//最早子promise决议成功，总promise决议成功
//最早子promise决议失败，总promise决议失败

function myPromiseRace(promiseList=[]){
    return new Promise((resolve,reject)=>{
            if(!Array.isArray(promiseList)){
                reject(new Error("传入的参数不是数组"));
            }
            for(let i=0;i<promiseList.length;i++){
                // Promise.resolve(promiseList[i])
                // .then(res=>resolve(res),err=>reject(err));
                Promise.resolve(promiseList[i])
                .then(resolve,reject);//简写方式
            }
        }
    )
}

myPromiseRace([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu"])//wuhuhuuuhhu是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 wuhuhuuuhhu
.catch((err)=>{console.log('总promise失败',err)});

myPromiseRace([promise1(),promise2(),promise3(),promise4()])//promise4()是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 4444   
.catch((err)=>{console.log('总promise失败',err)});

myPromiseRace([promiseReject2(),promiseReject1()])
.then((res)=>{console.log('总promise的结果',res)})
.catch((err)=>{console.log('总promise失败',err)});//总promise失败 当下子promise失败了

myPromiseRace([promise1(),promise2(),promiseReject1(),promise3()])//promiseReject1()是当下最快决议的
.then((res)=>{console.log('总promise的结果',res)}) 
.catch((err)=>{console.log('总promise失败',err)});//总promise失败 当下子promise失败了



