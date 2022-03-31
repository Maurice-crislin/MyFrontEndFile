import './App.css';
import React from 'react';
import Autobatching from './autobatching/Autobatching'
import NoUIAutobatching from './autobatching/NoUIAutobatching';
function App() {
  
  return (
    <div className="App">
      my world
      <Autobatching/>
      <NoUIAutobatching/>
    </div>
  );
}

export default App;
