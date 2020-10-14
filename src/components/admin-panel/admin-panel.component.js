import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminPanelSection from './admin-panel-section.component';

import './admin-panel.styles.css'




function AdminPanel() {

  return (
    <section className="AdminPanel">
      <header className="AdminPanel-header">
        <div>
          <h3>Painel Administrativo</h3>
        </div>
        <div>
          
        </div>
      </header>
      <AdminPanelSection />
    </section>
  )
}

export default AdminPanel;