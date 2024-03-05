// ScoreBoard.js

import React, { useEffect } from 'react';

import Score from './Score'

const ScoreBoard = () => {

  let scores = []


  const addGuess = (countryName, data) => {
    scores.push(<li>{Score(countryName, data)}</li>)
  }
  

  // useEffect(() => {
  //   numbers.map((number) =>);
  // }, [scores]);
  
  return (
    <div className="scoreboard">
      <ul>{scores}</ul>
    </div>
  );
};

export default ScoreBoard;
