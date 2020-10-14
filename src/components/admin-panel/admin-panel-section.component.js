import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Editor from './admin-panel-inicio'

function AdminPanelSection({ history, match }) {
  return(
    <section className="AdminPanel-section">
        <nav>
          <ul>
            <li onClick={() => history.push(`${match.url}${'/eventos'}`)} ><a>Eventos</a></li>
            <li onClick={() => history.push(`${match.url}${'/destaques'}`)} ><a>Destaques</a></li>
            <li onClick={() => history.push(`${match.url}${'/cards'}`)} ><a>Mini-Cards</a></li>
          </ul>
        </nav>
        <div>
          
            <Switch>
              <Route path="/admin/eventos" component={() => <Editor tipo="listaEventos" titulo="Eventos" />} />
              <Route path="/admin/destaques" component={() => <Editor tipo="listaCards" titulo="Destaques" />} />
              <Route path="/admin/cards" component={() => <Editor tipo="listaCardRedondo" titulo="Mini-Cards" />} />
            </Switch>
          
        </div>
      </section>
  )
}

export default withRouter(AdminPanelSection);