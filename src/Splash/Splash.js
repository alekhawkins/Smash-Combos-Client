import React from 'react';
import './Splash.css';
import Moves from './Moves/Moves';
import Characters from '../assets/smashCharacters.jpeg';
import {Container, Row, Col} from 'reactstrap';
import Auth from '../Auth/Auth';

const Splash = (props) => {

    console.log(props)

    return(
    <div>
        <Container>
            <Row>
                <Col md="12">
                    <img id="characters" src={Characters} />
                </Col>
            </Row>
        </Container>
        <br />
        <br />
        <Moves token={props.token} />
        <button className='logout' onClick={() => props.setSession(undefined)}>
            Logout
        </button>
    </div>
    )
}

export default Splash;