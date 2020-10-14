import React from 'react';
import './CardRedondo.css'
class CardRedondo extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="card-circular">
                <div class="head-card-img">
                    <img src={this.props.imagem} alt="imagem" />
                </div>
                <div class="footer-card-img">
                    {this.props.titulo}
                </div>
            </div>
        );
    }
}

export default CardRedondo;