import './App.css';
import React from 'react';
import ErrorBoundary from './DidCatchDemo/ErrorBoundary';
import UntrustedComponent from './DidCatchDemo/UntrustedComponent';
import Child from './page/Child';
import LazyLoadParent from './lazyload/LazyLoadParent';
import UseSuspenceForTest from './suspence/UseSuspenceForTest';
function App() {
  return (
    <div className="App">
      my world
      {/* <ErrorBoundary>
        wuhuhuhuh
        <UntrustedComponent/>
      </ErrorBoundary> */}
      {/* <LazyLoadParent/> */}
      <UseSuspenceForTest/>
    </div>
  );
}

export default App;
