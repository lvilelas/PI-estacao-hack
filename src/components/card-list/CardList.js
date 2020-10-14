import React from 'react';
import Card from './card/Card.js';
import './CardList.css';
import Carousel from "react-elastic-carousel";

class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        fetch('https://projeto-pi-digitalhouse.herokuapp.com/listaEventos')
        .then(response => response.json())
        .then(lista => this.setState({lista: lista}))
    }

    render() {
        return (<div className="CardList">
           <p className="card-list-title">{this.props.titulo}</p>
           <Carousel breakPoints={breakPoints}>
                {
                    /*
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
                     */
                }

                {
                    this.state.lista.map(({ titulo, dataDe, dataAte, descricao, imagem }) => (
                        <div>
                            <Card titulo={titulo} data1={dataDe} data2={dataAte} tipoEvento={descricao} img={imagem}/>
                        </div>
                    ))
                }
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