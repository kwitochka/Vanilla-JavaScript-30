const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//Fetching data looks like:
//1. Knock on the door (aka endpoint)
//2. Ask for a raw data to be packed in JSON
//3. Open up your packed data and use it 
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

const findMatches = (wordToFind, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToFind, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    let cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    let stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li class="name"><span>${cityName}, ${stateName}</span>
<span class="population">Population: ${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('keyup', displayMatches);