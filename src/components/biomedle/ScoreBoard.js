import React, { useState } from 'react';

const Scoreboard = (limit) => {
 const [scores, setScores] = useState([]);
 const [guessCount, setGuessCount] = useState(0);
 const guessLimit = limit

 const addScore = (name, area) => {
    setGuessCount(guessCount + 1); 
    const newScore = { name, area };
    setScores([...scores, newScore]);
    return guessCount < guessLimit
 };

 return (
    <div>
      <div className='guess_counter'>
        <p>{guessCount} / {guessLimit} </p>
      </div>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            <div>
              <span>{score.name}</span> - <span>{score.area}</span>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => addScore('Player 1', 'Area 1')}>Add Score</button>
    </div>
 );
};

export default Scoreboard;