// Template.js

import React from 'react';
import '../Template.css'; // Import your CSS file

const GameTemplate = ({ children }) => {
  return (
    <div className="template">
      <header>
          <h1>Biomedle</h1>
      </header>
      
      
      <main>
        {children}
      </main>
    

      <footer>
        <p>Aaron McCarthy | 2024</p>
      </footer>
    </div>
  );
};

export default GameTemplate;
