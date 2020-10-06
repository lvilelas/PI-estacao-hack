import React from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';
import CardList from './components/card-list/CardList.js';

function App() {
  return (
    <div className="App">
      <Header/>
        <div>
          <CardList/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
