import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Default from './pages/Default';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/child1' element={<Page1/>}/>
        <Route path='/child2' element={<Page2/>}/>
        <Route  path='*' element={<Default/>}/>
      </Routes>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
