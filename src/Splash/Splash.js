import React from 'react';
import './Splash.css';
import Moves from './Moves/Moves';
import Characters from '../assets/smashCharacters.jpeg';
import {Container, Row, Col} from 'reactstrap';

const Splash = (props) => {
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
    </div>
    )
}

export default Splash;