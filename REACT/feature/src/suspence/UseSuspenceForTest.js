import { Suspense } from "react";
import PromiseChild from "./PromiseChild";

export default function UseSuspenceForTest(){
    return(
        <div>
            <Suspense fallback={<div>just wait</div>}>
                <PromiseChild/>
            </Suspense>
        </div>
    )
}