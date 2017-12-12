import React, { Component } from 'react';
import cardBack from '../assets/images/card-back.jpg'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {}


        this.clicked = this.clicked.bind(this);
        // console.log(this.props.details.card)
        // console.log('CARD PROPS:', this.props);
    }

    clicked() {
        //console.log('Card clicked, method in card.js', this.props.details.id);
        this.props.checkCard(this.props.cardIndex);
        console.log(this)

    }

    render() {

        return (
            <div className="Card" onClick={this.clicked}>
                <div className="front">
                    <img src={this.props.details.card} />
                </div>
                <div className="back">
                    {/* <img src={cardBack} /> */}
                </div>
            </div>
        )
    }
}

export default Card