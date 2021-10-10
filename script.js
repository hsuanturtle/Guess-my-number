'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
let snumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number');

    // When player wins
  } else if (guess === snumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = snumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== snumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > snumber ? 'TOO HIGH' : 'TOO LOW';
      displayMessage(guess > snumber ? 'TOO HIGH' : 'TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too high
  // } else if (guess > snumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //     'TOO HIGH';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // when guess is too low
  // } else if (guess < snumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'TOO LOW';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// hit again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
