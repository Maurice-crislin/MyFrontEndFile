import React from "react";
export default function ComWithEvent(){
    const handleClick1=function(e){
        console.log(e.target,"现在是冒泡阶段",'nativeEvent',e.nativeEvent,'event',e);
    }
    const handleClick2=function(e){
        console.log(e.target,"现在是捕获阶段",'nativeEvent',e.nativeEvent,'event',e);
    }
    const handleChange1=function(e){
        console.log(e.target,"现在是冒泡阶段",'nativeEvent',e.nativeEvent,'event',e);
    }
    const handleChange2=function(e){
        console.log(e.target,"现在是捕获阶段",'nativeEvent',e.nativeEvent,'event',e);
    }
    return(
        <div>
            <button onClick={handleClick1} onClickCapture={handleClick2}>11111111111111</button>
            <input onChange={handleChange1} onChangeCapture={handleChange2}></input>
        </div>
    )
}