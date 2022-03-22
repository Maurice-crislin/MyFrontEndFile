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
