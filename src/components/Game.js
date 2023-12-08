// Game.js

import React, { useState } from 'react';
import Template from './Template';
import PieChart from './PieChart';
import countryList from 'country-list';
import seedrandom from 'seedrandom';

const Game = () => {
  // Sample data for testing
  const chartData = {
    labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
    datasets: [
      {
        data: [30, 20, 25, 25], // Sample percentages for each zone
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };
  // State for user input
  const [userInput, setUserInput] = useState('');
  const [latestGuess, setLatestGuess] = useState(null);
  const [infoPopupVisible, setInfoPopupVisible] = useState(false);

  // get a random country based on the current day
  const getRandomCountryOfTheDay = () => {
    const currentDate = new Date();
    const seed = currentDate.getUTCFullYear().toString() + (currentDate.getUTCMonth()).toString() + currentDate.getUTCDate().toString();
    const rng = seedrandom(seed);

    // Generate a random index within the bounds of the total number of countries
    const randomIndex = Math.floor(rng() * countryList.getData().length);
    console.log(randomIndex)

    const randomCountry = countryList.getData()[randomIndex];
    console.log(randomCountry)
    return randomCountry;
  };

  // handle the user's guess
  const onGuess = () => {
    
    console.log('User Guessed:', userInput);
    const countryCode = filterInput(userInput)
    // console.log(countryList.getCode(userInput))
    // console.log(countryCode)
    if (countryCode) {
      setLatestGuess(countryCode);
    } else {
      setInfoPopupVisible(true);
    }
    console.log('Country found:', countryCode);
    
    setUserInput('');
  };

  // filter input and return tcodehe country code
  const filterInput = (input) => {
    const code = countryList.getCode(input)

    if (!code && countryList.getName(input)){
      return 
    }
    return countryList.getCode(input);
  };
  
  const closeInfoPopup = () => {
    setInfoPopupVisible(false);
  };

  return (
    <Template>
      <div>
        <h2>Country: Sample Country</h2>
        <p>Environmental Zones by Relative Land Area</p>
        <PieChart data={chartData} />
        
        
      </div>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your guess..."
        />
        <button onClick={onGuess}>Search</button>
        {/* Render the PieChart component with the data from the latest guess */}
        {latestGuess && <PieChart data={chartData} />}

        {/* Info popup for not found message */}
        {infoPopupVisible && (
          <div>
            <p>Country not found!</p>
            <button onClick={closeInfoPopup}>Close</button>
          </div>
        )}

      <button onClick={getRandomCountryOfTheDay}>get_todays_country</button>
      </div>
    </Template>
  );
};

export default Game;
