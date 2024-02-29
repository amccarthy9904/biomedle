// Game.js

import React, { useState } from 'react';
import Template from './Template';
import PieChart from './PieChart';
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
  const endpoint = 'https://kav2cyk397.execute-api.us-west-2.amazonaws.com/prod/getCountry?country='
  // https://kav2cyk397.execute-api.us-west-2.amazonaws.com/prod/getCountry?country=UnitedStates
  let countries = ['andorra', 'united arab emirates', 'afghanistan', 'antigua and barbuda', 'anguilla', 'albania', 'armenia', 'angola', 'antarctica', 'argentina', 'american samoa', 'austria', 'australia', 'aruba', 'åland islands', 'azerbaijan', 'bosnia and herzegovina', 'barbados', 'bangladesh', 'belgium', 'burkina faso', 'bulgaria', 'bahrain', 'burundi', 'benin', 'saint barthélemy', 'bermuda', 'brunei darussalam', 'bolivia, plurinational state of', 'bonaire, sint eustatius and saba', 'brazil', 'bahamas', 'bhutan', 'bouvet island', 'botswana', 'belarus', 'belize', 'canada', 'cocos (keeling) islands', 'congo, democratic republic of the', 'central african republic', 'congo', 'switzerland', 'côte d\'ivoire', 'cook islands', 'chile', 'cameroon', 'china', 'colombia', 'costa rica', 'cuba', 'cabo verde', 'curaçao', 'christmas island', 'cyprus', 'czechia', 'germany', 'djibouti', 'denmark', 'dominica', 'dominican republic', 'algeria', 'ecuador', 'estonia', 'egypt', 'western sahara', 'eritrea', 'spain', 'ethiopia', 'finland', 'fiji', 'falkland islands (malvinas)', 'micronesia, federated states of', 'faroe islands', 'france', 'gabon', 'united kingdom of great britain and northern ireland', 'grenada', 'georgia', 'french guiana', 'guernsey', 'ghana', 'gibraltar', 'greenland', 'gambia', 'guinea', 'guadeloupe', 'equatorial guinea', 'greece', 'south georgia and the south sandwich islands', 'guatemala', 'guam', 'guinea-bissau', 'guyana', 'hong kong', 'heard island and mcdonald islands', 'honduras', 'croatia', 'haiti', 'hungary', 'indonesia', 'ireland', 'israel', 'isle of man', 'india', 'british indian ocean territory', 'iraq', 'iran, islamic republic of', 'iceland', 'italy', 'jersey', 'jamaica', 'jordan', 'japan', 'kenya', 'kyrgyzstan', 'cambodia', 'kiribati', 'comoros', 'saint kitts and nevis', 'korea, democratic people\'s republic of', 'korea, republic of', 'kuwait', 'cayman islands', 'kazakhstan', 'lao people\'s democratic republic', 'lebanon', 'saint lucia', 'liechtenstein', 'sri lanka', 'liberia', 'lesotho', 'lithuania', 'luxembourg', 'latvia', 'libya', 'morocco', 'monaco', 'moldova, republic of', 'montenegro', 'saint martin, (french part)', 'madagascar', 'marshall islands', 'north macedonia', 'mali', 'myanmar', 'mongolia', 'macao', 'northern mariana islands', 'martinique', 'mauritania', 'montserrat', 'malta', 'mauritius', 'maldives', 'malawi', 'mexico', 'malaysia', 'mozambique', 'namibia', 'new caledonia', 'niger', 'norfolk island', 'nigeria', 'nicaragua', 'netherlands', 'norway', 'nepal', 'nauru', 'niue', 'new zealand', 'oman', 'panama', 'peru', 'french polynesia', 'papua new guinea', 'philippines', 'pakistan', 'poland', 'saint pierre and miquelon', 'pitcairn', 'puerto rico', 'palestine, state of', 'portugal', 'palau', 'paraguay', 'qatar', 'réunion', 'romania', 'serbia', 'russian federation', 'rwanda', 'saudi arabia', 'solomon islands', 'seychelles', 'sudan', 'sweden', 'singapore', 'saint helena, ascension and tristan da cunha', 'slovenia', 'svalbard and jan mayen', 'slovakia', 'sierra leone', 'san marino', 'senegal', 'somalia', 'suriname', 'south sudan', 'sao tome and principe', 'el salvador', 'sint maarten, (dutch part)', 'syrian arab republic', 'eswatini', 'turks and caicos islands', 'chad', 'french southern territories', 'togo', 'thailand', 'tajikistan', 'tokelau', 'timor-leste', 'turkmenistan', 'tunisia', 'tonga', 'türkiye', 'trinidad and tobago', 'tuvalu', 'taiwan, province of china', 'tanzania, united republic of', 'ukraine', 'uganda', 'united states minor outlying islands', 'united states of america', 'uruguay', 'uzbekistan', 'holy see', 'saint vincent and the grenadines', 'venezuela, bolivarian republic of', 'virgin islands, british', 'virgin islands, u.s.', 'viet nam', 'vanuatu', 'wallis and futuna', 'samoa', 'yemen', 'mayotte', 'south africa', 'zambia', 'zimbabwe']
  let countries_set = new Set(countries)


  // get a random country based on the current day
  const getRandomCountryOfTheDay = () => {
    const currentDate = new Date();
    const seed = currentDate.getUTCFullYear().toString() + (currentDate.getUTCMonth()).toString() + currentDate.getUTCDate().toString();
    const rng = seedrandom(seed);

    // Generate a random index within the bounds of the total number of countries
    const randomIndex = Math.floor(rng() * countries.length);
    const randomCountry = countries[randomIndex];
    console.log(randomCountry)
    return randomCountry;
  };
  const printCountries = () => {
    var c = new String("[")

    for (let index = 0; index < countries.length; index++) {
      c = c + "\'" + countries[index] + "\'" + ", ";
    }
    c = c + "]"
    console.log(c)
  }

  // handle the user's guess
  const onGuess = () => {

    let input = userInput.toLowerCase()

    console.log('User Guessed:', input);
    if (!isValidCountryName(input)){
      setInfoPopupVisible(true);
      console.log('Country not found:', input);
      return 
    }
    
    setLatestGuess(userInput);
    console.log('Country found:', input);
    
    let url = endpoint + encodeURIComponent(input)
    console.log(url)
    
    setUserInput('');
  };

  // filter input and return the country code
  const isValidCountryName = (input) => {
    return countries_set.has(input)
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
