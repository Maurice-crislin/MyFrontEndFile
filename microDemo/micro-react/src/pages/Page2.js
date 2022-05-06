import React from "react";
import { useParams } from "react-router-dom";
export default function Page2(){
    const param=useParams();
    return(
        <div> child app2 welcome to my world {param.id}</div>
    )
}
