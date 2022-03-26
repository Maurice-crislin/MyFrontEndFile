import React, { Suspense } from "react"

//const MyChild=React.lazy(()=>setTimeout(()=>import('./Child'),5000))
const MyChild=React.lazy(()=>import('./Child'))
export default function LazyLoadParent(){
    return(
        <div>
            <Suspense fallback={<div>慢慢等吧</div>}>
                <MyChild/>
            </Suspense>
        </div>
    )
}