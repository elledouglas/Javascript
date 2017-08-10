console.log('Hello, Pac-Man!');
console.log('Pac-Man eats ghosts for lunch.');


//ARRAY
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts.');
console.log('Their names are: ');
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

// OBJECT
var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);


// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

// pacman-objects-2.js

console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

// same as above
console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

// pacman-for-loop.js
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

// pacman-if-else.js
var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');

// SWITCH
var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

// Named function
function eatDot() {
  console.log("MUNCH!");
}

// Anonymous function
// Assigning the function to a variable instead of giving it a name directly
var eatDot = function() {
  console.log("MUNCH!");
}
