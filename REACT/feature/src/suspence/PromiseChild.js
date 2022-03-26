const fetchData = () => {//写一个异步函数：
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('wuhuhuu')
        }, 1000);
    });
}
const wrap = (prms) => {//写一个wrap函数，用于将普通的异步函数包装为Suspense需要用到的格式。
    let status = 'pending';
    let result;
    prms.then((r) => {
        result = r;
        status = 'resolved';
    },
    (err) => {
        result = err;
        status = 'reject'
    });
    return () => {
        if (status === 'pending') {
            throw prms;    // 直接把pending的promise抛出，之后会被suspence捕获处理监听
        }
        if (status === 'reject') {
            throw result;//抛出决议失败的值,会被ErrorBoundary捕获
        }
        //'resolved'
        return result;//返回决议成功的值
    }
}
const tryReadData = wrap(fetchData()); // 获取包装后的函数
export default function PromiseChild(){
    const data = tryReadData(); // 满足不写await，但需要获取到最终数据
    return(
        <div>真正的异步数据回来啦{data}</div>
    )
}