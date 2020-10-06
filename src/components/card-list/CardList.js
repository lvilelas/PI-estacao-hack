import React from 'react';
import Card from './card/Card.js';
import './CardList.css';
import Carousel from "react-elastic-carousel";

class CardList extends React.Component {
    state = {}

    render() {
        return (<div>
           <p className="card-list-title">{this.props.titulo}</p>
           <Carousel breakPoints={breakPoints}>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
           </Carousel>
        </div>);
    }
}

const breakPoints = [
    {width:600, itemsToShow:1},
    {width:900, itemsToShow:2},
    {width:1200, itemsToShow:3},
    {width:1500, itemsToShow:4},
    {width:1900, itemsToShow:5},
    {width:2300, itemsToShow:6},
    {width:2500, itemsToShow:7}
]
export default CardList;