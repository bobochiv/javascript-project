/*
const RARITY_LIST = ['Common', 'Unusual', 'Rare', 'Epic'];
const items = []; // Array of item objects. These will be used to clone new items with the appropriate properties.
const GAME_STEPS = ['SETUP_PLAYER', 'SETUP_BOARD', 'GAME_START'];let gameStep = 0; // The current game step, value is index of the GAME_STEPS array.
let board = []; // The board holds all the game entities. It is a 2D array.
let player = {}; // The player object
*/
function printSectionTitle(title, count = 20) {
  print('-'.repeat(count) + title + '-'.repeat(count), 'blue');
}
function print(arg, color) {
  if (typeof arg === 'object') console.log(arg);
  else console.log('%c' + arg, `color: ${color};`);
}
function next() {
  gameStep++;
  run();
}

function run() {
  switch (GAME_STEPS[gameStep]) {
    case 'SETUP_PLAYER':
      setupPlayer();
      break;
    case 'SETUP_BOARD':
      setupBoard();
      break;
    case 'GAME_START':
      startGame();
      break;
  }
}
function setupBoard() {
  printSectionTitle('SETUP BOARD');
  print('Please create a board using initBoard(rows, columns)');
  print(
    'Setup monsters, items and more using createMonster(attr), createItem(item, pos), createTradesman(items, pos), createDungeon(pos), updateBoard(entity)'
  );
  print("Once you're done, go to the next step with next()");
}

function startGame() {
  printSectionTitle('START GAME');
  //print('Hello ' + player.name);
  print(
    "You are ready to start your adventure. Use move('U' | 'D' | 'L' | 'R') to get going."
  );
}
function setupPlayer() {
  printSectionTitle('SETUP PLAYER');
  print(
    "`Please create` a player using the createPlayer function. Usage: createPlayer('Bob')"
  );
  print(
    "You can optionally pass in a level and items, e.g. createPlayer('Bob', 3, [items[0], items[2]]). items[0] refers to the first item in the items variable"
  );
  print("Once you're done, go to the next step with next()");
}
print('Welcome to the game!', 'gold');
print('Follow the instructions to setup your game and start playing');
setupPlayer();

function createPlayer(name, level, items = []) {
  console.log(
    'Create player with name' + ' ' + name,
    'and level ' + level,
    items
  );
  const player = {
    name,
    level,
    items,
    hp: 100,
    attack: 10,
    exp: 0,
    gold: 0,
    items,
    //getExpToLevel:,
    //getMaxHp:,
    //skills: (2) [{...},{...}]
    speed: 3000,
    type: 'player',
    position: {},
    //levelUp:
  };
}

setupPlayer();
