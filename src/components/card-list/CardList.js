import React from 'react';
import Card from './card/Card.js';
import './CardList.css';
import Carousel from "react-elastic-carousel";

class CardList extends React.Component {
    state = {}

    render() {
        return (<div className="CardList">
           <p className="card-list-title">{this.props.titulo}</p>
           <Carousel breakPoints={breakPoints}>
                <Card titulo="Curso TI" data1="6 OUT " data2=" 2 NOV" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
                <Card titulo="Curso TI" data1="6 OUT 8:30" tipoEvento="Evento Online" img="https://images.sympla.com.br/5f775ba60c7c2-xs.jpg"/>
           </Carousel>
        </div>);
    }
}

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:800, itemsToShow:3},
    {width:1000, itemsToShow:4}
]
export default CardList;