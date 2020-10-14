import React from 'react';
import Button from '../../button/Button.js'
import './CardGrande.css'

class CardGrande extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="CardGrande">
            <div>
                <img src={this.props.imagem} />
            </div>
            <div className="CardGrande-info">
                <div>
                    <div><p><span className="CardGrande-info-data">{this.props.dataDe}</span> <span className="CardGrande-info-data" id="CardGrande-data2">{this.props.dataAte}</span></p></div>
                    <div><p className="CardGrande-info-texto">{this.props.titulo}}</p></div>
                    <div><p className="CardGrande-info-local">{this.props.descricao}</p></div>
                </div>
                <div>
                    <Button text="VER DETALHES" />
                </div>
            </div>
        </div>);
    }
}

export default CardGrande;