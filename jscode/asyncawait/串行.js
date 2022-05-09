function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tony')
        }, 2000)
    })
}

function getId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('123')
        }, 3000)
    })
}

//最普通的一种，是async await的常用场景，共用时5s左右 串行执行
(async () => {
    let start=new Date();
    let name = await getName()
    let id = await getId()
    let end=new Date();
    console.log(`name:${name}, id:${id}`,(end-start)/1000);//name:tony, id:123 5.021
})()
