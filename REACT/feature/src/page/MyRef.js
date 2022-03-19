import React, {
    useRef,
    useEffect,
  } from "react";
import Child from "./Child";
import ForwardRefChild from "./ForwardRefChild"
const MyRef=()=>{
    const dom1Ref=useRef(null);
    const dom2Ref=React.createRef();
    const classComRef=React.createRef();
    const funComRef=useRef(null);
    useEffect(()=>{
        console.log("dom1Ref.current",dom1Ref.current)
        console.log("dom2Ref.current",dom2Ref.current)
        console.log("funComRef.current",funComRef.current)
        console.log("classComRef.current",classComRef.current)
        classComRef.current.focus();
    })
    return (
        <div>
            <div ref={dom1Ref}>wuuhuhu</div>
            <div ref={dom2Ref}>sdfsfsdf</div>
            <Child ref={funComRef}></Child>
            <ForwardRefChild ref={classComRef}/>
        </div>
    )
}
export default MyRef;