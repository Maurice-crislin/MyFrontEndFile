import React,{useState,useMemo} from 'react';
import './index.css';
export default function VirtualList(){
    
    const [startIndex, setStartIndex] = useState(0);
    let  data=new Array(100000).fill(0);
    data=data.map((val,index)=>index);
    let itemHeight=22;
    let contanierHeight=300;
    
    let limit=useMemo(()=>Math.ceil(contanierHeight/itemHeight),[startIndex]);//limit向上取整，半露不露的也要给我渲染了
    console.log(limit)

    let itemList=useMemo(()=>{
        const rows=[];
        for(let i=startIndex;i<=startIndex+limit;i++){
            rows.push(<p key={i} style={{height:itemHeight+'px'}}>{data[i]}</p>)
        }
        return rows;
    },[startIndex]);

    function handleSrcoll(e){
        console.log(e.target.scrollTop);
        let curStartIndex=Math.floor(e.target.scrollTop/itemHeight);
        if(curStartIndex!==startIndex)setStartIndex(curStartIndex);
        console.log(curStartIndex,startIndex)
    }
    
    return(
        <div className='contanier'  onScroll={handleSrcoll}>
           {itemList}
        </div>
    )
}