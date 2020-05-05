import React from 'react';

function Clicky(props) {

    const clickyStyle = {
        backgroundImage: 'url(' + props.imgUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100px',
        width: '100px',
        border: '1px solid black'
    };

    return(
        <div style={clickyStyle} onClick={props.onClick} className="clicky"></div>
    )
}

export default Clicky;