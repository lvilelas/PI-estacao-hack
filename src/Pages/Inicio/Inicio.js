import React from 'react';

import CardList from '../../components/card-list/CardList.js';
import CardGrandeList from '../../components/card-grande-list/CardGrandeList.js'
import CardRedondoList from '../../components/card-redondo-list/CardRedondoList'

function Inicio() {
  return(
    <div className="AppBody">
      <CardRedondoList/>
      <div className="container-card-grande">
        <CardGrandeList/>
      </div>
      <CardList titulo="Eventos"/>
    </div>
  );
}

export default Inicio;