import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageContato from './pages/PageContato';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={PageContato} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;