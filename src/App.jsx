import React from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  }

  clickyCallback = (truthy) => {
    if(truthy){
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.score + 1 > this.state.topScore ? this.state.topScore +1 : this.state.topScore
      });
    } else {
      this.setState({
        score: 0,
        topScore: this.state.topScore
      });
    }
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}></Header>
        <div className="jumbotron">
          <h1>Click on an image to earn points, but don't click the same image twice</h1>
        </div>
        {/* Game Container */}
        <Game callback={this.clickyCallback}></Game>
      </div>
      
    );
  }
  
}

export default App;
