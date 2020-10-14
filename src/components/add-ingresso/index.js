import React from 'react';
import './style.css';
function AddIngressos(props) {
  
    return(

        //<!-- Ingressos adicionar -->
      <div className="area-adicionar">
      <div className="header-ingressos">
          <div className="title-adicionar-ingresso">Ingressos</div>
          <div className="valor-adicionar-ingresso">R${props.valor}</div>
      </div>
      <div className="body-ingrerssos">
          <div className="corpo-adicionar-ingresso">
             <span>Quantidade : </span> 
          </div>
          <div className="container-adicionar-ingresso">
              <div className="mais"><span>+</span></div>
              <div className="qtd-ingresso">0</div>
              <div className="menos"><span>-</span></div>
          </div>
      </div>
      <div className="rodape-ingrerssos">
          <a href="#" className="botao-continuar-quantidade-ingresso">Continuar</a>
          
      </div>

  </div>
    );
}

export default AddIngressos;