import React,{ useEffect, useRef, useState, useMemo } from "react"
import './index.css';
//要点：追踪两个ref: top/bottom来决定向上/向下滚动的渲染与否
//top可见 bottom 不可见，代表往上滑
export default function VirtualList2(){
    const containerRef=useRef();
    const topElement=useRef();
    const bottomElement=useRef();

    const [startIndex,setStartIndex]=useState(0);
    const [observer, setObserver] = useState(null);
    

    let  data=new Array(100).fill(0);
    data=data.map((val,index)=>index);
    let itemHeight=22;
    let contanierHeight=300;//规定可视区域的高度

    let limit=Math.ceil(contanierHeight/itemHeight);
    //limit向上取整，半露不露的也要给我渲染了

    // 改变空白填充区域的样式，否则就会出现可视区域的元素与滚动条不匹配的情况，实现不了平滑滚动的效果
    const topBlankFill = useMemo(()=>({
        // 起始索引就是可视区第一个元素的索引，索引为多少就代表前面有多少个元素
        paddingTop: `${startIndex * itemHeight}px`,
        // endIndex是我们渲染出来的最后一个元素，可能不在可视区内；用dataListRef最后一个元素的索引与endIndex相减就可以得到还没有渲染元素的数目
        paddingBottom: `${(data.length - 1 - Math.min(startIndex+limit,data.length-1)) * itemHeight}px`
    }),[startIndex]);

   
   
    useEffect(function(){
        // 交叉观察的具体回调，观察每个节点，并对实时头尾元素索引处理
        function callback(entries){
            entries.forEach((entry)=>{
                const{target,isIntersecting}=entry;
                //通过id判别元素
                if (isIntersecting && target.id === "bottom"&&startIndex+limit<=data.length-1) {
                    //startIndex+limit 到头了话也不用重新设置，防止抖动
                    setStartIndex(Math.min(data.length-1,startIndex+1));
                }
                //一个存在的bug，如果拖动滚动条过快，两个元素都不在视口中
                if (isIntersecting && target.id === "top") {
                    setStartIndex(Math.max(0,startIndex-1));
                }
            })
        }
        const options={
            root:containerRef.current||null,//观测的主窗口是外围容器，如果不写或赋null都默认最顶层视口
            threshold:1,//设置阈值高一点，防止触发过于频繁产生dom的抖动
        }
        const observer=new IntersectionObserver(callback,options);
        // 分别观察开头和结尾的元素
        if (topElement.current) {
            observer.observe(topElement.current);
        }
        if (bottomElement.current) {
            observer.observe(bottomElement.current);
        }
        setObserver(observer);
        return ()=>{
           observer.disconnect();//结束，停止观测所有目标
        }
    },[startIndex]);

   
    let ItemList=useMemo(()=>{
        const rows=[];
        let endIndex=Math.min(startIndex+limit,data.length-1);
        for(let i=startIndex;i<=endIndex;i++){
            if(i!=startIndex&&i!=endIndex){
                rows.push(<p key={i} style={{height:itemHeight+'px'}}>{data[i]}</p>);
                continue;
            }
            if(i==startIndex)rows.push(<p key={i} style={{height:itemHeight+'px'}} ref={topElement} id={'top'}>{data[i]}</p>);
            if(i==endIndex)rows.push(<p key={i} style={{height:itemHeight+'px'}} ref={bottomElement} id={'bottom'}>{data[i]}</p>);
        }
        return rows;
    },[startIndex]);

    return(
        <div className='contanier' ref={containerRef} >
            <div style={topBlankFill}>{ItemList}</div>
        </div>
    )
}