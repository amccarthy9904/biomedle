// Template.js

import React from 'react';
import './Template.css'; // Import your CSS file

const Template = ({ children }) => {
  return (
    <div className="template">
      <header>
          <h1>Biome.dle</h1>
      </header>
      
      <body>
        <main>
          {children}
        </main>
      </body>

      <footer>
        <p>Created by Your Name | Year</p>
      </footer>
    </div>
  );
};

export default Template;
