import React from 'react';
import Clicky from './Clicky';

class Game extends React.Component {

   state = {
        characters :  [
            {
                name: "chewie",
                imgUrl: "/img/chewie.jpg"
            },
            {
                name: "kylo",
                imgUrl: "/img/kylo.jpg"
            },
            {
                name: "rex",
                imgUrl: "/img/rex.jpg"
            },
            {
                name: "rey",
                imgUrl: "/img/rey.jpg"
            },
            {
                name: "stormtrooper",
                imgUrl: "/img/stormtrooper.jpg"
            },
            {
                name: "threepio",
                imgUrl: "/img/threepio.jpg"
            },
            {
                name: "vader",
                imgUrl: "/img/vader.jpg"
            },
            {
                name: "yoda",
                imgUrl: "/img/yoda.jpg"
            }
        ],
        clickedCharacters: []
    }

    shuffleArray = (array) => {
        array.sort(() => Math.random() - 0.5);
    };

    shuffleCharacters = [...this.state.characters];

    clicked = name => {
        let index = this.state.characters.findIndex(character => character.name === name);
        let clickedIndex = this.state.clickedCharacters.findIndex(character => character.name === name);
        if(clickedIndex !== -1) {
            alert('Game Over!');
            this.setState({clickedCharacters: []});
            this.props.callback(false);
        } else {
            let char = this.state.characters[index];
            let newClicked = this.state.clickedCharacters.concat(char);
            this.setState({clickedCharacters: newClicked});
            this.props.callback(true);
        }
        
    }

    render() {
        this.shuffleArray(this.shuffleCharacters);
        return (
            <div className="container game">
                {this.shuffleCharacters.map(character => {
                    return <Clicky onClick={() => this.clicked(character.name)} name={character.name} imgUrl={character.imgUrl} key={character.name}></Clicky>
                })}
            </div>
        )
    }
    
}

export default Game;