// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file
import Template from './Template';


const Home = () => {
    return (
      <Template>
        <div className="home">
          <section className="game-section">
            {/* Game content goes here */}
            <Link to="/game">
              <button className="start_button">\ | /</button>
            </Link>
            </section>
        </div>
      </Template>
    );
  };
  
  export default Home;