// Write your swapi code in this file!
let button = document.querySelector('#crawlBtn');
const SWAPI_PLANETS = 'https://swapi.co/api/planets/'
const formPlanet = document.querySelector('#planetForm');
const inputPlanet = document.querySelector('#planetInput');
const SWAPI_PEOPLE = 'https://swapi.co/api/people/';

function getOpeningCrawl() {
  fetch('https://swapi.co/api/films/1/')
  .then(res => res.json())
  .then(json => console.log(json));
}

button.addEventListener('click', getOpeningCrawl)

function getPlanet(planet){
  fetch(SWAPI_PLANETS + inputPlanet.value)
    .then(response => response.json())
    .then(data => document.querySelector('#planetData').innerHTML = `<h2>Name: ${data.name}</h2><p>Climate: ${data.climate}</p>`);
}

formPlanet.addEventListener('submit', getPlanet);


function getDroids(id) {
  const droidEl = document.querySelector('#droid-' + id);
  fetch(SWAPI_PEOPLE + id)
  .then(response => response.json())
  .then(data => {
    droidEl.innerHTML = `<h3>Name: ${data.name}</h3><p>Height: ${data.height}</p><p>Mass: ${data.mass}</p>`;
    const btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Home Planet");
    droidEl.appendChild(btn);
    btn.addEventListener('click', getHomePlanet = () => {
      const home = data.homeworld
      fetch(home)
      .then(response => response.json())
      .then(planet => {
        homeEl = document.createElement('p');
        droidEl.appendChild(homeEl);
        homeEl.innerHTML = `${planet.name}`
      });
    });
  });
}

getDroids(2);
getDroids(3);

document.addEventListener('DOMContentLoaded', undefined)
