import React, { Component } from 'react';
import cardBack from '../assets/images/card-back.jpg';

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zero_clicks: true,
            clicked: false
        }

        this.clicked = this.clicked.bind(this);
        // console.log(this.props.details.card)
        // console.log('CARD PROPS:', this.props);
    }



    clicked() {
        //console.log('Card clicked, method in card.js', this.props.details.id);
        this.setState({
            clicked: true
        })
        this.props.checkCard(this.props.cardIndex);


    }

    render() {
        const revealed = {
            display: 'none'
        }
        const set_card_clicked = this.state.clicked ? revealed : console.log('card isnt clicked');
        return (
            <div className="card" onClick={this.clicked}>
                <div className="front">
                    <img src={this.props.details.card} />
                </div>
                <div className="back" style={set_card_clicked}>
                    <img src={cardBack} />
                </div>
            </div>
        )
    }
}

export default Card