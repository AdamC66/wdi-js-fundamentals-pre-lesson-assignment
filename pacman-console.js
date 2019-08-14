console.log('Hello, PacMan!');

const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log(`There are ${ghosts.length} ghosts.`); // these are backticks, not quotes!
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);


const inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

const ghosts2 = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts2);


for (let index = 0; index < ghosts.length; index++) {
    console.log('Pac-Man eats ' + ghosts[index]);
  }

  let powerPelletEaten = false;
  let numghosts = 4;
  
  while (true) {
    console.log('Ghosts remaining: ' + numghosts);
  
    if (powerPelletEaten == false) {
      console.log('Pac-Man eats the power pellet.');
      powerPelletEaten = true;
    } else if (numghosts > 0) {
      console.log('Pac-Man eats a ghost.');
      numghosts--;
    } else {
      break;
    }
  }
  
  console.log('Pac-Man returns home after a long day in the maze.');


  function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }
  
    return currentScore + scoreToAdd;
  }
  
  let score = 0; // try this with const - it won't work!
  
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'powerPellet');
  score = addScore(score, 'firstGhost');
  console.log('Your score: ' + score);