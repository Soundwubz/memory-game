import React from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    gameWon: false
  }

  clickyCallback = (truthy) => {
    if(truthy){
      let newScore = this.state.score + 1;
      if(newScore > 7) {
        this.setState({gameWon: true});
        alert("Congratualtions you've won! All characters have been clicked without repeats.");
      } else {
        this.setState({
          score: newScore,
          topScore: newScore  > this.state.topScore ? newScore : this.state.topScore
        });
      }
    } else {
      this.setState({
        score: 0,
        topScore: this.state.topScore
      });
    }
  }

  gameOver = () => {
    this.setState({
      score: 0,
      topScore: 0,
      gameWon: false
    });
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}></Header>
        <div className="jumbotron">
          <h1>Click on an image to earn points, but don't click the same image twice</h1>
        </div>
        {/* Game Container */}
        <Game callback={this.clickyCallback} gameOverCb={this.gameOver}  gameWon={this.state.gameWon}></Game>
      </div>
      
    );
  }
  
}

export default App;
