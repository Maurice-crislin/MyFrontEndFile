import React from "react"
export default class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染可以显示降级 UI
        console.log(this)
        //console.log(error)最好不要执行副作用
        return { hasError: true };
      }
    
      componentDidCatch(error, info) {
        // "组件堆栈" 例子:
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(info.componentStack)
        //logComponentStackToMyService(info.componentStack);
      }
    
      render() {
        if (this.state.hasError) {
          // 你可以渲染任何自定义的降级 UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
      }
}