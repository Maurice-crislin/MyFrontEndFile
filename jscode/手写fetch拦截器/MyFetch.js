let OriginFetch=window.fetch;

//定义用来存储拦截请求和拦截响应结果的处理函数集合
let interceptors_req=[],interceptors_res=[];

//Promise<Response> fetch(input[, init]); 
// ?input
// 定义要获取的资源。这可能是：
// 一个 USVString 字符串，包含要获取资源的 URL。一些浏览器会接受 blob: 和 data: 作为 schemes.
// 一个 Request 对象。
function MyFetch(input,init={}){

    //interceptors_req是拦截请求的拦截处理函数集合
    interceptors_req.forEach((interceptor)=>{
        init=interceptor(init);//对init循环操作
    })

    return new Promise((resolve,reject)=>{
        OriginFetch(input,init).then((res)=>{

            interceptors_res.forEach((interceptor)=>{
                res=interceptor(res);// 对响应结果循环操作
            })

            resolve(res); //interceptors_req是拦截请求的拦截处理函数集合
        }).catch((err)=>{
            reject(err);
        })
    })
}


MyFetch.interceptors={
    request:{
        use(callbackFn){
            interceptors_req.push(callbackFn);
        }
    },
    response:{
        use(callbackFn){
            interceptors_res.push(callbackFn);
        }
    }
}


//test

MyFetch('https://api.github.com/users/ruanyf').then(res=>JSON.parse(res)).then(res=>console.log(res)).catch(err=>console.log('err',err))
//正常返回值
//{login: 'ruanyf', id: 905434, node_id: 'MDQ6VXNlcjkwNTQzNA==', avatar_url: 'https://avatars.githubusercontent.com/u/905434?v=4', gravatar_id: '', …}

// 添加响应拦截器后
//{name: 'coco', age: 21}
MyFetch.interceptors.response.use(function(res){
    let obj={
        name:"coco",
        age:21
    }
    return JSON.stringify(obj);//把js对象序列化json
})



export default MyFetch;