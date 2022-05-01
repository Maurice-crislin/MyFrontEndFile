import { useImmer } from "use-immer"
import React from "react"
export default function UseImmerTest(){
    const [obj,setObj]=useImmer()
    setObj((draft)=>draft.name='wuhu')
    return (
        <div>{obj.name}</div>
    )
}