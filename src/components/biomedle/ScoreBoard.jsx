import React, { useState } from 'react';
import Score from './Score';
const Scoreboard = ({ scores, guessCount, guessLimit }) => {

  return (
    <div>
      <div className='guess_counter'>
        <p>{scores.length} / {guessLimit} </p>
      </div>
      <ul className='score_list'>
        {scores.map((score) => {
          return (
            <Score 
            {...scores}
              key={score.id}
              name={score.name}
              area={score.area}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default Scoreboard;