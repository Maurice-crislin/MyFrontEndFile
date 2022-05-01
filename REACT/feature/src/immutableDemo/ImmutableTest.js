import { useEffect, useState } from "react"

export default function ImmutableTest(){
    const [count,setCount]=useState(0);
    const [obj,setObj]=useState({val:3});
    useEffect(()=>{
        console.log("无依赖项的安装函数")
        return ()=>console.log("无依赖项的清理函数")
    })
    useEffect(()=>{
        console.log("有依赖项但为空的安装函数")
        return ()=>console.log("有依赖项但为空的清理函数")
    },[])

    // useEffect(()=>{
    //     let interval = setInterval(()=>{setCount(count+1);},2000);
    //     return ()=>{clearInterval(interval);console.log("有依赖项的话，每次依赖项改变，清理函数也会执行")};//返回值一定得是个函数，必须包一层来着
    // },[count]);

    useEffect(()=>{
        let interval = setInterval(()=>{setObj();},2000);
        return ()=>{clearInterval(interval);console.log("有依赖项的话，每次依赖项改变，清理函数也会执行")};//返回值一定得是个函数，必须包一层来着
    },[count]);
    return(
        <div>
            {obj.val}
        </div>
    )
}