import React, {useState} from 'react';
import './Auth.css';
import APIURL from '../helpers/enviroment';

const Auth = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup'
    }

    const logginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setUserName('')
        setPassword('');
    }

    const signupFields = () => !login ? (
        <div>
            <label htmlFor='userName'>Username: </label>
            <br/>
            <input type='text' id='userName' value={userName} onChange={ (e) => setUserName(e.target.value) } />
            <br/>
            <label htmlFor='password'>Password:</label>
            <br/>
            <input type='text' id='lastName' value={password} onChange={ (e) => setPassword(e.target.value) }/>
        </div>
    ) : null;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = login ? `${APIURL}/auth/signin` : `${APIURL}/auth/signup`

        const bodyObj = login ? {
            userName: userName,
            password: password
        } : {
            userName: userName,
            password: password
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {props.setSession(json.sessionToken); localStorage.setItem('token', json.sessionToken)})
        .catch(err => console.log(err))
    }

    return(

        <div className="wrapper">
            <form onSubmit={handleSubmit} updateToken={props.updateToken}>
            <h1>{title()}</h1>
            <label htmlFor='userName'>Username: </label>
            <br/>
            <input type='text' id='userName' value={userName} onChange={ (e) => setUserName(e.target.value) } />
            <br/>
            <label htmlFor='password'>Password:</label>
            <br/>
            <input type='text' id='password' value={password} onChange={ (e) => setPassword(e.target.value) }/>
            <br/>
            <button id="authButton" onClick={logginToggle}>Login/Signup Toggle</button>
            <br/>
            <button id="authButton" type='submit'>Submit</button>
            </form>
        </div>
    )
    
}

export default Auth;