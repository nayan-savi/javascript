'use strict';

/*console.log(document.querySelector('.message').textContent);
let element = document.getElementsByClassName('message')[0];
console.log(element.innerHTML);
console.log(document.querySelector('.guess'));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const wrongGuess = function (message) {
  displayMessage(message);
  score--;
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number!');
  } else if (score == 0) {
    displayMessage('You lost the game :(');
  } else if (guess == secretNumber) {
    displayMessage('Correct Number :)');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    guess > secretNumber ? wrongGuess('Too High!') : wrongGuess('Too Low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/*const guess = {
  score: 20,
  highScore: 0,
  generateRandom: function () {
    let min = Math.ceil(1);
    let max = Math.floor(20);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};

const guessNumber = function () {
  let expected = guess.generateRandom();
  const actual = Number(document.getElementById('number').value);
  console.log(actual, expected);
  if (guess.score == 0) {
    alert('Game Over!');
    resetData();
  } else if (actual === expected) {
    document.getElementById('guessed').innerHTML = actual;
    guess.highScore += actual;
    document.getElementById('highscore').innerHTML = guess.highScore;
    document.body.style.backgroundColor = 'green';
  } else {
    guess.score--;
    document.getElementById('score').innerHTML = guess.score;
  }

  //console.log(guess);
};

const resetData = function () {
  document.getElementById('score').innerHTML = 20;
  document.getElementById('highscore').innerHTML = 0;
  document.getElementById('guessed').innerHTML = '?';
  document.getElementById('number').value = '';
  //console.log(guess);
};
*/
