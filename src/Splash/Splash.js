import React from 'react';
import './Splash.css';
import Moves from './Moves/Moves';

const Splash = (props) => {
    return(
<div>
    <Moves token={props.token} />
</div>
    )
}

export default Splash;