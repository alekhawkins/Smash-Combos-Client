import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Auth from './Auth/Auth';
import Splash from './Splash/Splash';
import Moves from './Splash/Moves/Moves'

function App() {

  const[sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  const clearToken= () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor = () => {
    return sessionToken !== undefined ? <Splash token={sessionToken} setSession={setSessionToken} clearToken={clearToken} /> : <Auth setSession={setSessionToken} updateToken={updateToken} />
  }

  return (
    <div className="App">
      <Navbar />
      {viewConductor()}
      {/* <Moves /> */}
      {/* <Auth  /> */}
    </div>
  );
}

export default App;
