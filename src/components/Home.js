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
            <Link to="/gamestart">
              <button className="start_button">\ | /</button>
            </Link>
            <Link to="/fax">
              <button className="start_button">FAX</button>
            </Link>
            </section>
        </div>
      </Template>
    );
  };
  
  export default Home;