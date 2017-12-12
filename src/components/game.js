import React, { Component } from 'react';
import Card from './card';
import dark from '../assets/images/dark.jpg';
import head from '../assets/images/head.jpg';
import leftarm from '../assets/images/leftarm.jpg';
import leftleg from '../assets/images/leftleg.jpg';
import obelisk from '../assets/images/obelisk.jpg';
import rightarm from '../assets/images/rightarm.jpg';
import rightleg from '../assets/images/rightleg.jpg';
import slifer from '../assets/images/slifer.jpg';
import wingra from '../assets/images/wingra.jpg';

const list_of_cards = [
    {
        id: "dark",
        card: dark,
        visabilty: false,
        matched: false
    },
    {
        id: "head",
        card: head,
        visabilty: false,
        matched: false
    },
    {
        id: "leftarm",
        card: leftarm,
        visabilty: false,
        matched: false
    },
    {
        id: "leftleg",
        card: leftleg,
        visabilty: false,
        matched: false
    },
    {
        id: "obelisk",
        card: obelisk,
        visabilty: false,
        matched: false
    },
    {
        id: "rightarm",
        card: rightarm,
        visabilty: false,
        matched: false
    },
    {
        id: "rightleg",
        card: rightleg,
        visabilty: false,
        matched: false
    },
    {
        id: "slifer",
        card: slifer,
        visabilty: false,
        matched: false
    },
    {
        id: "wingra",
        card: wingra,
        visabilty: false,
        matched: false
    }
]

class Game extends Component {
    componentWillMount() {
        let hold_cards = this.combine_array();
        let cards_randomized = [];
        while (hold_cards.length !== 0) {
            let randomIndex = Math.floor(Math.random() * hold_cards.length)
            cards_randomized.push(hold_cards[randomIndex]);
            hold_cards.splice(randomIndex, 1)
        }
        this.setState({
            cards: cards_randomized
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            cards: null,
            cards_matched: 0,
            first_click: null,
            second_click: null
        }
    }

    combine_array() {
        const new_array = list_of_cards.concat(list_of_cards);
        return new_array
    }

    checkMatch(index) {
        // console.log('Card clicked. Method from game.js index is:', index);
    }


    render() {

        const render_cards = this.state.cards.map((value, index) => {
            return <Card
                key={index}
                cardIndex={index}
                details={value}
                checkCard={(i) => this.checkMatch(i)}
                match={this.state.cards_matched}
            />
        })
        return (

            < div className="gameBoard" >
                {render_cards}
            </div >
        )
    }
}

export default Game