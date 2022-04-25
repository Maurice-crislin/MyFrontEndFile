function limitReq(urls=[],limit=2){
    return new Promise((resolve,reject)=>{//总promise
        let count=0,len=urls.length,resList=[];
        while(limit-->0){
            start();//最开始并发开limit个，每个并发结束后再递归开一个并发。
        }

        function start(){
            if(urls.length==0)return;
            let curUrl=urls.shift();
            
            fetch(curUrl)
            .then((res)=>{console.log("结果",res);resList.push({'res':res});})
            //结果 Response {type: 'basic', url: 'https://talent.baidu.com/resume/deliver/list?recruitType=INTERN&_=1650723107403', redirected: false, status: 200, ok: true, …}
            .catch((err)=>{console.log('err',err);resList.push({'err':err});})
            .finally(()=>{       
                if(++count==len){
                    resolve(resList);//全部完成，退出
                }else{
                    start();
                }
            })

        }
    })
}

let url='https://talent.baidu.com/resume/deliver/list?recruitType=INTERN&_=1650723107403';
limitReq([url,url,url])
.then((res)=>console.log('总promise的答案',res))//总promise的答案 (3) [{…}, {…}, {…}]
.catch((err)=>console.log('总promise出错了',err))
