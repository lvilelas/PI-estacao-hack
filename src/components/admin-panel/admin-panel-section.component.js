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
            <li onClick={() => history.push(`${match.url}${'/inicio'}`)} ><a>Início</a></li>
            <li onClick={() => history.push(`${match.url}${'/eventos'}`)} ><a>Eventos</a></li>
          </ul>
        </nav>
        <div>
          
            <Switch>
              <Route path="/admin/inicio" component={() => <Editor tipo="listaEventos" />} />
              <Route path="/admin/eventos" component={() => <Editor tipo="listaCards" />} />
            </Switch>
          
        </div>
      </section>
  )
}

export default withRouter(AdminPanelSection);