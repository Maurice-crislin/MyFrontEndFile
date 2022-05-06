import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Default from './pages/Default';

function App() {
  return (
    <div className="App">
      基座应用
      <Routes>
        <Route path='/app1' element={<Page1/>}/>
        <Route path='/app2' element={<Page2/>}/>
        <Route path='*' element={<Default/>}/>
      </Routes>
    </div>
  );
}

export default App;
