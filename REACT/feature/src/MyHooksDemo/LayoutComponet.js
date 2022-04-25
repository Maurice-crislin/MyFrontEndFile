import React, { useEffect, useState } from "react";
import './index.css';
export default function LayoutComponent(){
    const [onSmallScreen,setOnSmallScreen] = useState(window.innerWidth < 768);

    useEffect(()=>{
        window.addEventListener('resize',checkScreenSize);
        return function(){
            window.removeEventListener('resize',checkScreenSize);
        }
    })

    function checkScreenSize(){
        setOnSmallScreen(window.innerWidth < 768);
    }

    return(
        <div className={`${onSmallScreen?"small":"large"}`}>
            <h1>没有自定义hooks的情况下</h1>
        </div>
    )
}