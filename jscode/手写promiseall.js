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

Promise.all([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu"])
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 (4) [111, 222, 333, 4444,"wuhuhuuuhhu"]
.catch((err)=>{console.log('总promise失败',err)});

Promise.all([promise1(),promiseReject(),promise3(),promise4()])
.then((res)=>{console.log('总promise的结果',res)})
.catch((err)=>{console.log('总promise失败原因',err)});//总promise失败原因 当下子promise失败了

function myPromiseAll(promiseList=[]){//必须保证顺序返回结果
    
    return new Promise((resolve,reject)=>{
        
        if(!Array.isArray(promiseList)) {          //判断一下传入的参数是否为数组
            return reject(new Error('传入的参数不是数组！'))
        }
        let resList=[],count=0;    
        for(let i=0;i<promiseList.length;i++){
            //用promise包装,以防其中混有常量
            Promise.resolve(promiseList[i])
            .then((res)=>{
                resList[i]=res;
                if(++count==promiseList.length)resolve(resList);
            })
            .catch((err)=>reject(err));
        }
    })
}

myPromiseAll([promise1(),promise2(),promise3(),promise4(),"wuhuhuuuhhu"])
.then((res)=>{console.log('总promise的结果',res)})//总promise的结果 (4) [111, 222, 333, 4444,"wuhuhuuuhhu"]
.catch((err)=>{console.log('总promise失败',err)});

myPromiseAll([promise1(),promiseReject(),promise3(),promise4()])
.then((res)=>{console.log('总promise的结果',res)})
.catch((err)=>{console.log('总promise失败原因',err)});//总promise失败原因 当下子promise失败了

 