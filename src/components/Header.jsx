import React from 'react';

class Header extends React.Component {
    
    render() {
        return (
            <div className="container-fluid header">
                <div className="row bg-dark">
                <div className="col-6">
                    <h1 className="text-light display-4">Memory Game</h1>
                </div>
                <div className="col-6">
                    <h3 className="text-light text-right">
                        Score: <span className="score">{this.props.score} </span> 
                        | Top Score: <span className="topScore">{this.props.topScore}</span>
                    </h3>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;