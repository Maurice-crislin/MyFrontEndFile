import './App.css';
import React from 'react';
// import ErrorBoundary from './DidCatchDemo/ErrorBoundary';
// import UntrustedComponent from './DidCatchDemo/UntrustedComponent';
// import Child from './page/Child';
// import LazyLoadParent from './lazyload/LazyLoadParent';
// import UseSuspenceForTest from './suspence/UseSuspenceForTest';
import ComWithEvent from './event/ComWithEvent';
function App() {
  //const handerClick= (value) => console.log(value);
  return (
    <div className="App">
      my world
      {/* <ErrorBoundary>
        wuhuhuhuh
        <UntrustedComponent/>
      </ErrorBoundary>
      <LazyLoadParent/>
      <UseSuspenceForTest onClick={handerClick}/>
      <div >sdasdds</div> */}
      <ComWithEvent/>
    </div>
  );
}

export default App;
