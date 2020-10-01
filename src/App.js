import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AppBody"><button>x</button></div>
    </div>
  );
}

export default App;
