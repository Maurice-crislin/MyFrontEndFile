function getParams(url) {
    const res = {};
    let arr;
    if(url.includes('?')){
        let paramsStr=url.split('?')[1];//?后面都是参数
        let paramList=paramsStr.split('&');
        paramList.forEach((item)=>{
            arr=item.split('=')
            res[arr[0]]=decodeURIComponent(arr[1]);//对值进行解码
        })
    }
    return res;
  }
  
  // 测试
  //?之后是参数
  const user = getParams('http://www.baidu.com?user=%E9%98%BF%E9%A3%9E&age=16')
  console.log(user) // { user: '阿飞', age: '16' }
  