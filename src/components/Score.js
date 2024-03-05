// Score.js

import React from 'react';

const Score = ({ countryName, data }) => {

  
  return (
    <div className="score">
      <p>{countryName} {data}</p>
    </div>
  );
};

export default Score;
