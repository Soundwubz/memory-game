import React from 'react';
import chewie from '../img/chewie.jpg';
import kylo from '../img/kylo.jpg';
import rex from '../img/rex.jpg';
import rey from '../img/rey.jpg';
import stormtrooper from '../img/stormtrooper.jpg';
import threepio from '../img/threepio.jpg';
import vader from '../img/vader.jpg';
import yoda from '../img/yoda.jpg'

function Clicky(props) {

    const clickyStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        width: '200px',
        margin: '20px',
        border: '1px solid black',
        display: 'inline-block'
    };
    switch(props.name) {
        case "chewie":
            clickyStyle.backgroundImage = "url(" + chewie + ")";
            break;
        case "kylo":
            clickyStyle.backgroundImage = "url(" + kylo + ")";
            break;
        case "rex":
            clickyStyle.backgroundImage = "url(" + rex + ")";
            break;
        case "rey":
            clickyStyle.backgroundImage = "url(" + rey + ")";
            break;
        case "stormtrooper":
            clickyStyle.backgroundImage = "url(" + stormtrooper + ")";
            break;
        case "threepio":
            clickyStyle.backgroundImage = "url(" + threepio + ")";
            break;
        case "vader":
            clickyStyle.backgroundImage = "url(" + vader + ")";
            break;
        case "yoda":
            clickyStyle.backgroundImage = "url(" + yoda + ")";
            break;
        default:
            clickyStyle.background = "red";
            break;
    }

    return(
        <div style={clickyStyle} onClick={props.onClick} className="clicky"></div>
    )
}

export default Clicky;