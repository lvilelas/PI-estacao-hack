import React from 'react';
import Button from '../../button/Button.js'
import './CardGrande.css'

class CardGrande extends React.Component {
    state = {}

    render() {
        return (<div className="CardGrande">
            <div>
                <img src="https://images.sympla.com.br/5f74f3be8ca2a.png" />
            </div>
            <div className="CardGrande-info">
                <div>
                    <div><p><span className="CardGrande-info-data">{this.props.data1}</span> <span className="CardGrande-info-data" id="CardGrande-data2">{this.props.data2}</span></p></div>
                    <div><p className="CardGrande-info-texto">ROAD TOUR EXPERIENCE - VIANOVA E OS VIAJANTES DO ESPAÇO</p></div>
                    <div><p className="CardGrande-info-local">Complexo do Ginâsio do Ibirapuera - São Paulo, SP</p></div>
                </div>
                <div>
                    <Button text="VER DETALHES" />
                </div>
            </div>
        </div>);
    }
}

export default CardGrande;