import React from 'react';
import './Navbar.css';

import Smash from '../assets/Smash.png'

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img src={Smash} id='Smash'/>
            </nav>
        </div>
    )
}

export default Navbar;