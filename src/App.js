import React from 'react';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer';


import AdminPanel from './components/admin-panel/admin-panel.component'
import Home from './pages/Home.js'
import PageContato from './pages/PageContato.js';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/contato" component={PageContato} />
        </Switch>
      <Footer />
    </div>
  )
}
export default App;
