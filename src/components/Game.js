// Game.js

import React, { useEffect, useState } from 'react';
import Template from './Template';
import PieChart from './PieChart';
import ScoreBoard from './ScoreBoard';
import seedrandom from 'seedrandom';
// import { tab } from '@testing-library/user-event/dist/tab';
import placeholderImage from '../img/india.jpg';



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

  const colors = {'Deserts & Xeric Shrublands': '#FA647F', 'N/A': '#E2E2E0', 'Tropical & Subtropical Moist Broadleaf Forests': '#304A00', 'Mediterranean Forests, Woodlands & Scrub': '#FFA77F', 'Temperate Broadleaf & Mixed Forests': '#267300', 'Tropical & Subtropical Coniferous Forests': '#00734C', 'Temperate Conifer Forests': '#92BA71', 'Boreal Forests/Taiga': '#E2C7FA', 'Flooded Grasslands & Savannas': '#5993B9', 'Temperate Grasslands, Savannas & Shrublands': '#F6FC38', 'Montane Grasslands & Shrublands': '#C98D68', 'Tropical & Subtropical Dry Broadleaf Forests': '#99C726', 'Tropical & Subtropical Grasslands, Savannas & Shrublands': '#FBA141', 'Mangroves': '#E600AA', 'Tundra': '#4C82B6'}
  const countries = ['andorra', 'united arab emirates', 'afghanistan', 'antigua and barbuda', 'anguilla', 'albania', 'armenia', 'angola', 'antarctica', 'argentina', 'american samoa', 'austria', 'australia', 'aruba', 'åland islands', 'azerbaijan', 'bosnia and herzegovina', 'barbados', 'bangladesh', 'belgium', 'burkina faso', 'bulgaria', 'bahrain', 'burundi', 'benin', 'saint barthélemy', 'bermuda', 'brunei darussalam', 'bolivia, plurinational state of', 'bonaire, sint eustatius and saba', 'brazil', 'bahamas', 'bhutan', 'bouvet island', 'botswana', 'belarus', 'belize', 'canada', 'cocos (keeling) islands', 'congo, democratic republic of the', 'central african republic', 'congo', 'switzerland', 'côte d\'ivoire', 'cook islands', 'chile', 'cameroon', 'china', 'colombia', 'costa rica', 'cuba', 'cabo verde', 'curaçao', 'christmas island', 'cyprus', 'czechia', 'germany', 'djibouti', 'denmark', 'dominica', 'dominican republic', 'algeria', 'ecuador', 'estonia', 'egypt', 'western sahara', 'eritrea', 'spain', 'ethiopia', 'finland', 'fiji', 'falkland islands (malvinas)', 'micronesia, federated states of', 'faroe islands', 'france', 'gabon', 'united kingdom of great britain and northern ireland', 'grenada', 'georgia', 'french guiana', 'guernsey', 'ghana', 'gibraltar', 'greenland', 'gambia', 'guinea', 'guadeloupe', 'equatorial guinea', 'greece', 'south georgia and the south sandwich islands', 'guatemala', 'guam', 'guinea-bissau', 'guyana', 'hong kong', 'heard island and mcdonald islands', 'honduras', 'croatia', 'haiti', 'hungary', 'indonesia', 'ireland', 'israel', 'isle of man', 'india', 'british indian ocean territory', 'iraq', 'iran, islamic republic of', 'iceland', 'italy', 'jersey', 'jamaica', 'jordan', 'japan', 'kenya', 'kyrgyzstan', 'cambodia', 'kiribati', 'comoros', 'saint kitts and nevis', 'korea, democratic people\'s republic of', 'korea, republic of', 'kuwait', 'cayman islands', 'kazakhstan', 'lao people\'s democratic republic', 'lebanon', 'saint lucia', 'liechtenstein', 'sri lanka', 'liberia', 'lesotho', 'lithuania', 'luxembourg', 'latvia', 'libya', 'morocco', 'monaco', 'moldova, republic of', 'montenegro', 'saint martin, (french part)', 'madagascar', 'marshall islands', 'north macedonia', 'mali', 'myanmar', 'mongolia', 'macao', 'northern mariana islands', 'martinique', 'mauritania', 'montserrat', 'malta', 'mauritius', 'maldives', 'malawi', 'mexico', 'malaysia', 'mozambique', 'namibia', 'new caledonia', 'niger', 'norfolk island', 'nigeria', 'nicaragua', 'netherlands', 'norway', 'nepal', 'nauru', 'niue', 'new zealand', 'oman', 'panama', 'peru', 'french polynesia', 'papua new guinea', 'philippines', 'pakistan', 'poland', 'saint pierre and miquelon', 'pitcairn', 'puerto rico', 'palestine, state of', 'portugal', 'palau', 'paraguay', 'qatar', 'réunion', 'romania', 'serbia', 'russia', 'rwanda', 'saudi arabia', 'solomon islands', 'seychelles', 'sudan', 'sweden', 'singapore', 'saint helena, ascension and tristan da cunha', 'slovenia', 'svalbard and jan mayen', 'slovakia', 'sierra leone', 'san marino', 'senegal', 'somalia', 'suriname', 'south sudan', 'sao tome and principe', 'el salvador', 'sint maarten, (dutch part)', 'syrian arab republic', 'eswatini', 'turks and caicos islands', 'chad', 'french southern territories', 'togo', 'thailand', 'tajikistan', 'tokelau', 'timor-leste', 'turkmenistan', 'tunisia', 'tonga', 'türkiye', 'trinidad and tobago', 'tuvalu', 'taiwan, province of china', 'tanzania, united republic of', 'ukraine', 'uganda', 'united states minor outlying islands', 'united states of america', 'uruguay', 'uzbekistan', 'holy see', 'saint vincent and the grenadines', 'venezuela, bolivarian republic of', 'virgin islands, british', 'virgin islands, u.s.', 'viet nam', 'vanuatu', 'wallis and futuna', 'samoa', 'yemen', 'mayotte', 'south africa', 'zambia', 'zimbabwe']
  const country_names = ['Andorra', 'United Arab Emirates', 'Afghanistan', 'Antigua and Barbuda', 'Anguilla', 'Albania', 'Armenia', 'Angola', 'Antarctica', 'Argentina', 'American Samoa', 'Austria', 'Australia', 'Aruba', 'Åland Islands', 'Azerbaijan', 'Bosnia and Herzegovina', 'Barbados', 'Bangladesh', 'Belgium', 'Burkina Faso', 'Bulgaria', 'Bahrain', 'Burundi', 'Benin', 'Saint Barthélemy', 'Bermuda', 'Brunei Darussalam', 'Bolivia, Plurinational State of', 'Bonaire, Sint Eustatius and Saba', 'Brazil', 'Bahamas', 'Bhutan', 'Bouvet Island', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Cocos (Keeling) Islands', 'Congo, Democratic Republic of the', 'Central African Republic', 'Congo', 'Switzerland', 'Côte d\'Ivoire', 'Cook Islands', 'Chile', 'Cameroon', 'China', 'Colombia', 'Costa Rica', 'Cuba', 'Cabo Verde', 'Curaçao', 'Christmas Island', 'Cyprus', 'Czechia', 'Germany', 'Djibouti', 'Denmark', 'Dominica', 'Dominican Republic', 'Algeria', 'Ecuador', 'Estonia', 'Egypt', 'Western Sahara', 'Eritrea', 'Spain', 'Ethiopia', 'Finland', 'Fiji', 'Falkland Islands (Malvinas)', 'Micronesia, Federated States of', 'Faroe Islands', 'France', 'Gabon', 'United Kingdom of Great Britain and Northern Ireland', 'Grenada', 'Georgia', 'French Guiana', 'Guernsey', 'Ghana', 'Gibraltar', 'Greenland', 'Gambia', 'Guinea', 'Guadeloupe', 'Equatorial Guinea', 'Greece', 'South Georgia and the South Sandwich Islands', 'Guatemala', 'Guam', 'Guinea-Bissau', 'Guyana', 'Hong Kong', 'Heard Island and McDonald Islands', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'Ireland', 'Israel', 'Isle of Man', 'India', 'British Indian Ocean Territory', 'Iraq', 'Iran, Islamic Republic of', 'Iceland', 'Italy', 'Jersey', 'Jamaica', 'Jordan', 'Japan', 'Kenya', 'Kyrgyzstan', 'Cambodia', 'Kiribati', 'Comoros', 'Saint Kitts and Nevis', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Cayman Islands', 'Kazakhstan', 'Lao People\'s Democratic Republic', 'Lebanon', 'Saint Lucia', 'Liechtenstein', 'Sri Lanka', 'Liberia', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Libya', 'Morocco', 'Monaco', 'Moldova, Republic of', 'Montenegro', 'Saint Martin, (French part)', 'Madagascar', 'Marshall Islands', 'North Macedonia', 'Mali', 'Myanmar', 'Mongolia', 'Macao', 'Northern Mariana Islands', 'Martinique', 'Mauritania', 'Montserrat', 'Malta', 'Mauritius', 'Maldives', 'Malawi', 'Mexico', 'Malaysia', 'Mozambique', 'Namibia', 'New Caledonia', 'Niger', 'Norfolk Island', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'Nepal', 'Nauru', 'Niue', 'New Zealand', 'Oman', 'Panama', 'Peru', 'French Polynesia', 'Papua New Guinea', 'Philippines', 'Pakistan', 'Poland', 'Saint Pierre and Miquelon', 'Pitcairn', 'Puerto Rico', 'Palestine, State of', 'Portugal', 'Palau', 'Paraguay', 'Qatar', 'Réunion', 'Romania', 'Serbia', 'Russia', 'Rwanda', 'Saudi Arabia', 'Solomon Islands', 'Seychelles', 'Sudan', 'Sweden', 'Singapore', 'Saint Helena, Ascension and Tristan da Cunha', 'Slovenia', 'Svalbard and Jan Mayen', 'Slovakia', 'Sierra Leone', 'San Marino', 'Senegal', 'Somalia', 'Suriname', 'South Sudan', 'Sao Tome and Principe', 'El Salvador', 'Sint Maarten, (Dutch part)', 'Syrian Arab Republic', 'Eswatini', 'Turks and Caicos Islands', 'Chad', 'French Southern Territories', 'Togo', 'Thailand', 'Tajikistan', 'Tokelau', 'Timor-Leste', 'Turkmenistan', 'Tunisia', 'Tonga', 'Türkiye', 'Trinidad and Tobago', 'Tuvalu', 'Taiwan, Province of China', 'Tanzania, United Republic of', 'Ukraine', 'Uganda', 'United States Minor Outlying Islands', 'United States of America', 'Uruguay', 'Uzbekistan', 'Holy See', 'Saint Vincent and the Grenadines', 'Venezuela, Bolivarian Republic of', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Viet Nam', 'Vanuatu', 'Wallis and Futuna', 'Samoa', 'Yemen', 'Mayotte', 'South Africa', 'Zambia', 'Zimbabwe']
  const broken_countries = new Set(['russia', 'australia', 'united states of america'])
  const country_data_url = 'https://7bwp04kcs8.execute-api.us-west-2.amazonaws.com/prod/country/data?countryName='
  const country_image_url = 'https://7bwp04kcs8.execute-api.us-west-2.amazonaws.com/prod/country/image?countryName='
  const countries_set = new Set(countries)

  // get a random country based on the current day
  const getRandomCountryOfTheDay = () => {
    const currentDate = new Date();
    const seed = currentDate.getUTCFullYear().toString() + (currentDate.getUTCMonth()).toString() + currentDate.getUTCDate().toString();
    const rng = seedrandom(seed);

    const randomIndex = Math.floor(rng() * countries.length);
    let randomCountry = countries[randomIndex];
    if (broken_countries.has(randomCountry)){
      randomCountry = countries[randomIndex + 1]
    }
    console.log(randomCountry)
    return randomCountry;
  };

  const [userInput, setUserInput] = useState('');
  const [latestGuess, setLatestGuess] = useState(null);
  const [infoPopupVisible, setInfoPopupVisible] = useState(false);
  const [currCountryImg, setImg] = useState('')
  const [currCountryData, setData] = useState('')
  const currCountry = getRandomCountryOfTheDay()
  const scoreBoard = ScoreBoard(10)
  const [showImage, setImgVisible] = useState(false);

  const callAPI = async (endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      });
      const data = await response.json();
      console.log('Data from API:', data);
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      return 
    }
  }

  const getSuggestedCountries = () => {
    return country_names
      .filter(country => country.toLowerCase().includes(userInput.toLowerCase()))
      .slice(0, 5);
  };

  const getImage = () => {
    fetchImage();
  }

  const onGuess = () => {
    console.log("currentimg", currCountryImg)
    let input = userInput.replace(/[^a-zA-Z' ô().üç]+/g, '').toLowerCase()
    console.log('sani input:', input)

    console.log('User Guessed:', input);
    if (countries_set.has(input)){
    
      setLatestGuess(userInput);
      console.log('Country found:', input);
      
      let response = callAPI(country_data_url + encodeURIComponent(input))
      console.log(response)
      if (input === currCountry){
        setImgVisible(true)
        console.log('you win the game')
      }

      scoreBoard.addScore(input, response.Item.total_area)
      setUserInput('');
    }

    else{
      setInfoPopupVisible(true);
      console.log('Country not found:', input);
    }

  };
  
  const closeInfoPopup = () => {
    setInfoPopupVisible(false);
  };

  
  const fetchImage = async () => {
    const res = await callAPI(country_image_url + currCountry);
    // console.log("response", res)
    // console.log("res.image", res.image)
    const img = res ? `data:image/png;base64,${res.image}` : `data:image/png;base64,${placeholderImage}`
    setImg(img);
    // setImgVisible(true)
  };

  useEffect(() => {
    // fetchImage();
  }, []);
  

  return (
    <Template>
      <div>
        <h2>Country: Sample Country</h2>
        <p>Environmental Zones by Relative Land Area</p>
        <PieChart data={chartData} />
        
        
      </div>
      <div>
      {showImage && (
        <img src={currCountryImg} alt="Country" className="image-container"/>
        )}

    </div>
      <div>
        <label htmlFor="countryInput">Country:</label>
        <input
          type="text"
          id="countryInput"
          list="countrySuggestions"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Guess a Country"
        />
        <datalist id="countrySuggestions">
        {getSuggestedCountries().map((country, index) => (
          <option key={index} value={country} />
        ))}
      </datalist>
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

      <button onClick={getImage}>get_image</button>
      <div>
        <p>scoreboard</p>
        {scoreBoard}
      </div>
      </div>
    </Template>
  );
};

export default Game;
