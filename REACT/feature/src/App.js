import './App.css';
import React from 'react';
// import LayoutComponent from './MyHooksDemo/LayoutComponet';
// import LayoutComUseMyHooks from './MyHooksDemo/LayoutComUseMyHooks';
// import VirtualList1 from './LongList/VirtualListDemo/VirtualList1';
import VirtualList2 from './LongList/VirtualListDemo/VirtualList2';
import ImmutableTest from './immutableDemo/ImmutableTest';
import UseImmerTest from './immutableDemo/UseImmerTest';
function App() {
  
  return (
    <div className="App">
      {/* my world
      <LayoutComponent/>
      <LayoutComUseMyHooks/> */}
      {/* <VirtualList1/> */}
      <VirtualList2/>
      {/* <ImmutableTest/> */}
      <UseImmerTest/>
    </div>
  );
}

export default App;
