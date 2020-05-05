import React from 'react';
import Clicky from './Clicky';

class Game extends React.Component {

   state = {
        characters :  [
            {
                name: "chewie"
            },
            {
                name: "kylo"
            },
            {
                name: "rex"
            },
            {
                name: "rey"
            },
            {
                name: "stormtrooper"
            },
            {
                name: "threepio"
            },
            {
                name: "vader"
            },
            {
                name: "yoda"
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
            if(this.props.gameWon) {
                this.props.gameOverCb();
                this.setState({clickedCharacters: []});
            }
        }
        
    }

    render() {
        this.shuffleArray(this.shuffleCharacters);
        return (
            <div className="container game">
                {this.shuffleCharacters.map(character => {
                    return <Clicky onClick={() => this.clicked(character.name)} name={character.name} key={character.name}></Clicky>
                })}
            </div>
        )
    }
    
}

export default Game;