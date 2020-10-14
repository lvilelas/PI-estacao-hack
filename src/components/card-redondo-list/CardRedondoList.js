import React from 'react';
import Carousel from "react-elastic-carousel";
import CardRedondo from "./card-redondo/CardRedondo.js"
import './CardRedondoList.css'

class CardRedondoList extends React.Component {
    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        fetch('https://projeto-pi-digitalhouse.herokuapp.com/listaCardRedondo')
        .then(response => response.json())
        .then(lista => this.setState({lista: lista}))
    }

    render() { 
        return ( 
        <div className="CardRedondoList">
            <p className="CardRedondoList-titulo">Viva tudo que te conecta</p>
            <Carousel breakPoints={breakPoints}>
                {
                    this.state.lista.map(({ imagem, titulo }) => (
                        <CardRedondo imagem={imagem} titulo={titulo}/>
                    ))
                }
            </Carousel>
        </div>
             );
    }
}
 
const breakPoints = [
    {width:300, itemsToShow:2},
    {width:400, itemsToShow:3},
    {width:450, itemsToShow:4},
    {width:550, itemsToShow:5},
    {width:800, itemsToShow:7},
    {width:1000, itemsToShow:8}
]

export default CardRedondoList;