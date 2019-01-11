// Write your numbers code in this file!
const button1 = document.querySelector('#number-one');
const NUM_API = 'http://numbersapi.com/';
const inputNumber = document.querySelector('#pick-a-number');
let year = new Date().getFullYear()
let arry100 = []

function numberOne() {
  fetch('http://numbersapi.com/1/trivia')
  .then(response => response.text())
  .then(data => document.querySelector('#one-facts').innerHTML = data);
}

button1.addEventListener('click', numberOne)

function pickNumber() {
  if (isNaN(inputNumber.value)){
    return document.querySelector('#random-math-fact').innerHTML = 'please enter a valid number';
  } else {
    fetch(NUM_API + inputNumber.value + '/trivia')
    .then(response => response.text())
    .then(data => document.querySelector('#random-math-fact').innerHTML = data);
  }
}

inputNumber.addEventListener('change', pickNumber);


function historyYear() {
  setInterval(() => {
    fetch(NUM_API + year + '/year')
    .then(response => response.text())
    .then(data => {
      document.querySelector('#year-history').innerText = data
    });
    year--
  }, 5000);
}

document.addEventListener('DOMContentLoaded', historyYear);

const ulEl  = document.createElement('ul');
const divEl = document.querySelector('#all-the-numbers');
divEl.appendChild(ulEl);

function callNumbers(){
  let numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 1000));
  ulEl.innerHTML = '';
  for (const value of numbers) {
    const numberEl = document.createElement('li');
    fetch(NUM_API + value + '/trivia')
    .then(response => response.text())
    .then(data => ulEl.appendChild(numberEl).innerHTML = data);
    divEl.appendChild(ulEl);
  }
}

document.querySelector('#all-numbers-button').addEventListener('click', callNumbers)
