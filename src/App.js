import React, {useState} from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Auth from './Auth/Auth';
import Splash from './Splash/Splash';
import Moves from './Splash/Moves/Moves'

function App() {

  const[sessionToken, setSessionToken] = useState(undefined);

  const viewConductor = () => {
    return sessionToken !== undefined ? <Splash token={sessionToken} /> : <Auth setSession={setSessionToken} />
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
