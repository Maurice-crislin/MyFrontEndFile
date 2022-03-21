async function my(){
    await new Promise().reject("failed");
    //await new Promise().resolver("wuhuhuh")
    await new Promise(function (resolve, reject) {
        throw new Error('出错了');
      });
}
my().then((res)=>console.log(res),(err)=>console.log(err))