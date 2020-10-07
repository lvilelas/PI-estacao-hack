import React from 'react';
import './CardRedondo.css'
class CardRedondo extends React.Component {
    state = {}
    render() {
        return (
            <div class="card-circular">
                <div class="head-card-img">
                    <img src="https://www.sympla.com.br/images/thumb-collection-gratis.jpg?v=1.0" alt="imagem" />
                </div>
                <div class="footer-card-img">
                    titulo da imagem
                </div>
            </div>
        );
    }
}

export default CardRedondo;