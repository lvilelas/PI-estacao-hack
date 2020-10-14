import React from 'react'
import Carousel from "react-elastic-carousel";
import CardGrande from './card-grande/CardGrande.js'
import './CardGrandeList.css'
class CardGrandeList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        fetch('https://projeto-pi-digitalhouse.herokuapp.com/listaCards')
        .then(response => response.json())
        .then(lista => this.setState({lista: lista}))
    }

    render() {
        return (<div className="CardGrandeList">
            <p className="CardGrande-titulo">Destaques</p>
            <Carousel breakPoints={breakPoints}>
                {
                    this.state.lista.map(({ imagem, dataDe, dataAte, titulo, descricao }) => (
                        <CardGrande imagem={imagem} dataDe={dataDe} dataAte={dataAte} titulo={titulo} descricao={descricao}/>
                    ))
                }
            </Carousel>
        </div>);
    }
}

const breakPoints = [
    { width: 1, itemsToShow: 1 }
]

export default CardGrandeList;