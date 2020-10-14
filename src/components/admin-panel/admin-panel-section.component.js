import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Editor from './admin-panel-inicio'

function Eventos() {
  return(
    <header>
      <h3>Eventos</h3>
    </header>
  )
}

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
              <Route path="/admin/eventos" component={() => <Editor tipo="listaEventos" />} />
              <Route path="/admin/destaques" component={() => <Editor tipo="listaCards" />} />
              <Route path="/admin/cards" component={() => <Editor tipo="listaCardRedondo" />} />
            </Switch>
          
        </div>
      </section>
  )
}

export default withRouter(AdminPanelSection);