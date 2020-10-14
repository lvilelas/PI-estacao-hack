import React from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';
import CardList from './components/card-list/CardList.js';
import CardGrandeList from './components/card-grande-list/CardGrandeList.js'
import CardRedondoList from './components/card-redondo-list/CardRedondoList'
import AddIngressos from './components/add-ingresso';
import PageContato from './pages/PageContato'

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="AppBody">
          <CardRedondoList/>
          <div className="container-card-grande">
            <CardGrandeList/>
          </div>
          <CardList titulo="Eventos"/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
