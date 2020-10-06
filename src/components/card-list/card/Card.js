import React from 'react';
import './Card.css'
class Card extends React.Component {
    state = {}
    render() {
        return (
            <div className="card-quadrado">
                <div className="head-card-img">
                    <img src={this.props.img} alt="imagem" />
                </div>
                <div className="periodo-card-img">
                    <span>{this.props.data}</span>
                </div>
                <span className="card-separador"/>
                <div className="footer-card-img">
                    {this.props.titulo}
                        </div>
                <div className="tipo-evento-card">
                    <span>{this.props.tipoEvento}</span>
                </div>
            </div>
        );
    }
}

export default Card;