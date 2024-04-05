// App.js

import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
import Game from './components/biomedle/Game'; 
import GameStart from './components/biomedle/GameStart'; 
import Fax from './components/fax/Fax'; 
// import { withAuthenticator } from 'aws-amplify-react'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fax" element={<Fax/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/gamestart" element={<GameStart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// export default withAuthenticator(App, { includeGreetings: true })