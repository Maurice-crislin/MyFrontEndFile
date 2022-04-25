import { useEffect, useState } from "react";

export default function useWindowWidth(){
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
    
    return onSmallScreen;
}