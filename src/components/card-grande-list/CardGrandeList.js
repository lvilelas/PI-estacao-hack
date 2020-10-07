import React from 'react'
import Carousel from "react-elastic-carousel";
import CardGrande from './card-grande/CardGrande.js'
import './CardGrandeList.css'
class CardGrandeList extends React.Component {
    state = {}
    render() {
        return (<div className="CardGrandeList">
            <p className="CardGrande-titulo">Destaques</p>
            <Carousel breakPoints={breakPoints}>
                <CardGrande data1="10 OUT" data2="  20 NOV"/>
                <CardGrande />
                <CardGrande />
                <CardGrande />
                <CardGrande />
                <CardGrande />
                <CardGrande />
                <CardGrande />
                <CardGrande />
            </Carousel>
        </div>);
    }
}

const breakPoints = [
    { width: 1, itemsToShow: 1 }
]

export default CardGrandeList;