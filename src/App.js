import React from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';


import AdminPanel from './components/admin-panel/admin-panel.component'
import Inicio from './Pages/Inicio/Inicio.js'

import { Switch, Route } from 'react-router-dom';
/*
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
*/

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      <Footer />
    </div>
  )
}
export default App;
