import './App.css';
import React from 'react';
import ErrorBoundary from './DidCatchDemo/ErrorBoundary';
import UntrustedComponent from './DidCatchDemo/UntrustedComponent';
import Child from './page/Child';
function App() {
  return (
    <div className="App">
      my world
      <ErrorBoundary>
        wuhuhuhuh
        <UntrustedComponent/>
      </ErrorBoundary>
      {/* <PointerError>
          <SomeState></SomeState>
        </PointerError> */}
    </div>
  );
}

export default App;
class PointerError extends React.Component {
  // PointerError是错误捕获组件
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      text: ''
    }
  }
  // parseStr(str) {
  // 格式化位置组件错误信息
  //   let res = str.match(/in[^\(]+\(/g)
  //   res = res.map(item => item.slice(3, -2))
  //   console.log('res', res)
  // }
  componentDidCatch(error, info) {
    console.log(error, info)
    alert('错误发生的位置：' + info.componentStack) //错误信息error.message, 错误堆栈error.stack, 组件堆栈info.componentStack
    this.setState({
      error,
      info,
      text: info.componentStack
    })
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>错误是：{this.state.error.toString()}</h1>
          <h2>错误出现的位置是：{this.state.text}</h2>
          <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2942945378,442701149&fm=26&gp=0.jpg" />
        </div>
      )
    }
    console.log(this.props.children)
    return this.props.children
  }
}

class SomeState extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }
  render() {
    throw new Error('我发生了错误') //报错信息
    return (
      <div>
        <div>你已经正确的打开了页面</div>
      </div>
    )
  }
}

