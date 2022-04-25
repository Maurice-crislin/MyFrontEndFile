import React from "react";
import useWindowWidth from "./useWindowWidth";
import './index.css';
export default function LayoutComUseMyHooks(){
    
    const onSmallScreen=useWindowWidth();

    return(
        <div className={`${onSmallScreen?"small":"large"}`}>
            <h1>使用自定义hooks的情况下</h1>
        </div>
    )
}