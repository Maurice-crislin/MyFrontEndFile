import React,{useState,useMemo,useCallback,useRef} from 'react';
import './index.css';
export default function VirtualList(){
    
    const [startIndex, setStartIndex] = useState(0);
    const containerRef=useRef();
    
    let  data=new Array(100000).fill(0);
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
  

    let ItemList=useMemo(()=>{
        const rows=[];
        let endIndex=Math.min(startIndex+limit,data.length-1);
        for(let i=startIndex;i<=endIndex;i++){
            rows.push(<p key={i} style={{height:itemHeight+'px'}}>{data[i]}</p>)
        }
        return rows;
    },[startIndex]);


    const  handleSrcoll = useCallback(throttle(function () {

        // 注意这个对应的是可视区第一个元素的索引值，而不是第多少个元素
        let currentIndex = Math.floor(containerRef.current.scrollTop / itemHeight) // itemHeight是列表每一项的高度

        //console.log('containerRef.current.scrollTop',containerRef.current.scrollTop)
        if (currentIndex !== startIndex) {         
            setStartIndex(currentIndex);
        }
    },100), [startIndex])
//虚拟列表很依赖于滚动事件，考虑到用户可能会滑动很快，我们在用节流优化的时候事件必须要设置的够短，否则还是会出现白屏现象。


    function throttle(fn,time){
        let start=0;
        return function(){
            let cur=new Date();
            if(cur-start>time){
                fn.apply(this,arguments);
                start=cur;
            }
        }
    }

    return(
        <div className='contanier' onScroll={handleSrcoll} ref={containerRef} >
            <div style={topBlankFill}>{ItemList}</div>
        </div>
    )
}

//     // 利用请求动画帧做了一个节流优化
//     let then = useRef(0)
//     const boxScroll = () => {
//     const now = Date.now()
//   /**
//    * 这里的等待时间不宜设置过长，不然会出现滑动到空白占位区域的情况
//    * 因为间隔时间过长的话，太久没有触发滚动更新事件，下滑就会到padding-bottom的空白区域
//    * 电脑屏幕的刷新频率一般是60HZ，渲染的间隔时间为16.6ms，我们的时间间隔最好小于两次渲染间隔16.6*2=33.2ms，一般情况下30ms左右，
//    */
//   if (now - then.current > 30) {
//     then.current = now
//     // 重复调用scrollHandle函数，让浏览器在下一次重绘之前执行函数，可以确保不会出现丢帧现象
//     window.requestAnimationFrame(handleSrcoll)
//   }
// }