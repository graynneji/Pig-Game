'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//selecting elements
//not wriing a selector but passing the name of the id the id getelementbyid is faster than
//queryselector and only works when youre selecting like thousands elements either use '#score--o' or the getele.. 'score--0'
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0E1 = document.getElementById('current--0');
const current1E2 = document.getElementById('current--1');

const int = function () {};

score0.textContent = 0;
score1.textContent = 0;

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let scoreForE1 = 0;
let scoreForE2 = 0;
let playing = true;

int();

//Switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// const hiddenFunc = function () {
diceEl.classList.add('hidden');
// };
// hiddenFunc();

//the rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //   let cur = 0;
    let diceRol = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    //   console.log(diceRol);
    //   current0E1.textContent = diceRol;
    //   current0E1.textContent = cur;

    //manipulate the source attribute in our image with javascript

    //display dice
    diceEl.src = `dice-${diceRol}.png`;

    if (diceRol !== 1) {
      currentScore += diceRol;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//MY OWN WORKING HOLD BTN

// btnHold.addEventListener('click', function () {
//   if (activePlayer === 0) {
//     scoreForE1 += currentScore;
//     score0.textContent = scoreForE1;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//   } else {
//     scoreForE2 += currentScore;
//     score1.textContent = scoreForE2;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//   }

// });

//Hold btn

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = flase;
      diceEl.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// let playerScore = document.querySelector('#current--0');
// const player = document.querySelector('.');
// let player1 = [];

//roll dice

// roller.addEventListener(
//   'click',
//   function () {
//     const dice = Math.trunc(Math.random() * 7) + 0;
//   }

//   const player1 = (playerScore.textContent = dice);

//   const SumDice = function (dice) {
//     playerScore.textContent = dice;
//   };
// );

// SumDice();
// if (dice === 0) {
//   playerScore.textContent = 0;
// } else {
//   playerScore.textContent = dice;

//Button New
btnNew.addEventListener('click', function () {});
