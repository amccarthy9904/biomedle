// App.js

import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
import Game from './components/Game'; 
// import { withAuthenticator } from 'aws-amplify-react'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// export default withAuthenticator(App, { includeGreetings: true })