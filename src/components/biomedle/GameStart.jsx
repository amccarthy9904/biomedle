// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './GameStart.css'; // Import your CSS file
import GameTemplate from './GameTemplate';


const GameStart = () => {
    return (
      <GameTemplate>
        <div className="gamestart">
          <section className="game-section">
            <Link to="/game">
              <button className="start_button">\ | /</button>
            </Link>
            </section>
        </div>
      </GameTemplate>
    );
  };
  
  export default GameStart;