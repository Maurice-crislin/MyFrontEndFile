import React from "react";
class NoUIAutobatching extends React.Component {
    constructor() {
      super();
      this.state = {
        val: 0,
        index:0
      };
    }
    
    componentDidMount() {
      this.setState({val: this.state.val + 111111111111,index: this.state.index+1});
      console.log(this.state.val); //0
      this.setState({val: this.state.val + 111111111111});
      console.log(this.state.val); //0
      this.setState({val: this.state.val + 1});
      console.log(this.state.val); //0
        //18版本 同步一批，异步一批，并且传入的是对象，合并成一次setState，以一批的最后一个为准
      setTimeout(() => {
        this.setState({val: this.state.val + 22222222222, index: this.state.index+3});
        console.log(this.state.val); //1
        this.setState({val: this.state.val + 222222222222});
        console.log(this.state.val); //1
        this.setState({val: this.state.val + 4});
        console.log(this.state.val); //1
      }, 0);
    }
  
    render() { 
      return (<div>{this.state.val}<br/>{this.state.index}</div>);//5  
    }
  };

export default NoUIAutobatching;
  

