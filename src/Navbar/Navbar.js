import React from 'react';
import './Navbar.css';

import Logout from './Logout/Logout';
import Smash from '../assets/Smash.png'

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img src={Smash} id='Smash'/>
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;