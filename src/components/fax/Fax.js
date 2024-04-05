// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Fax.css'; // Import your CSS file
import FaxTemplate from './FaxTemplate';


const Fax = () => {
    return (
      <FaxTemplate>
        <div className="home">
          <section className="game-section">
            <Link to="/gamestart">
              <button className="start_button">\ | /</button>
            </Link>
            </section>
        </div>
      </FaxTemplate>
    );
  };
  
  export default Fax;