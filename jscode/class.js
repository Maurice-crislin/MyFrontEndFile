class father{
    constructor(){
        this.name="wuhu"
    }
    getNum(){
        console.log(23)
    }
}
let child=new father();//23
child.getNum()
father.prototype.getNum=function(){
    console.log(88)
}
child.getNum();//88
child.getNum=function(){
    console.log(44)
}
child.getNum();//44