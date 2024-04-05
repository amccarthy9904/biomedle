// Template.js

import React from 'react';
import '../Template.css'; // Import your CSS file

const FaxTemplate = ({ children }) => {
  return (
    <div className="template">
      <header>
          <h1>HIPPA FAX</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>2024</p>
      </footer>
    </div>
  );
};

export default FaxTemplate;
