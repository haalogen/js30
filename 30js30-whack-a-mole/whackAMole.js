const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole; // last time hole from where a mole popped
let timeUp = false;
let score = 0;


function randomTime (min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function randomHole (holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('That\'s the same one');
    return randomHole(holes);
  };

  lastHole = hole;
  return hole;
}

function peep () {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up'); // pop mole
  setTimeout(() => {
    hole.classList.remove('up'); // hide mole
    if (!timeUp) peep();
  }, time);
}

function startGame () {
  scoreBoard.textContent = 0; // reset score board
  timeUp = false;
  score = 0;
  peep(); // runs the game
  setTimeout(() => timeUp = true, 10000);
}

function bonk (e) {
  // bonk a mole on the head
  if (!e.isTrusted) return; // cheater!
  score++;
  this.classList.remove('up'); // hide mole
  scoreBoard.textContent = score; // update score board
}

moles.forEach(mole => mole.addEventListener('click', bonk));