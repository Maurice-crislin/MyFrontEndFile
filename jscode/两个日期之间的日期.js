function RangeDates(startDate,endDate){
    let list=[];
    let startTime=new Date(startDate).getTime();//时间戳    getTime 方法的返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
    let endTime=new Date(endDate).getTime();
    while(startTime<=endTime){
        let curDate=new Date(startTime);//Sat Feb 29 2020 08:00:00 GMT+0800 (中国标准时间)
        console.log(curDate)
        list.push(curDate.getFullYear()+'-'+(curDate.getMonth()+1)+'-'+curDate.getDate())
        startTime+=(24*60*60*1000);
    }
    return list;
}

console.log(RangeDates('2020-02-18','2020-03-02'));
//['2020-2-2', '2020-2-3', '2020-2-4', '2020-2-5', '2020-2-6', '2020-2-0', '2020-2-1', '2020-2-2', '2020-2-3', '2020-2-4', '2020-2-5', '2020-2-6', '2020-3-0']