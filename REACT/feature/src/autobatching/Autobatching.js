import React ,{ useState } from "react";
export default function Autobatching(){
    let [count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(0);
    console.log('我渲染了',"count1",count1,"count2",count2);
    const handleClick1=()=>{
        setCount1(++count1);
        setCount1(++count1);
        setTimeout(()=>{
            setCount1(++count1);
            setCount1(++count1);
            setCount1(++count1);
            setCount1(++count1);
        })
    }
    const handleClick2=()=>{
        setCount2(++count2);
        setCount2(++count2);
        setTimeout(()=>{
            setCount2(++count2);
            setCount2(++count2);
            setCount2(++count2);
            setCount2(++count2);
        })
    }
    return(
        <div>
            <button onClick={handleClick1}>wuhu1</button>
            <button onClick={handleClick2}>wuuhu2</button>
            <div>{count1}</div>
            <div>{count2}</div>
        </div>
    )
}