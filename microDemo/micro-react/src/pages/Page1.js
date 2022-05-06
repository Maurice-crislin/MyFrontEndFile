import React from "react";
import { useParams } from "react-router-dom";
export default function Page1(){
    const param=useParams();
    //console.log('param.id',param.id)
    return(
        <>
            <div>child app1 welcome to my world {param.id}www</div>
        </>
    )
}
