import * as Phaser from 'phaser';

/**
 * Put The Lights Out Game
 */
export default class Game extends Phaser.Game {
  constructor(react) {
    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: window.innerWidth,
      height: window.innerHeight,
      scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      render: {
        pixelArt: true
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: GameScene5
    }
    super(config);
    this.react = react;
  }
}

/**
 * Global variables
 */
var dx = [ 1, -1, 0, 0 ]; // move by x
var dy = [ 0, 0, 1, -1 ]; // move by y

// track all tiles for easy access
var moves = 0;
var boardSize = 2;
var background;
var tilesMatrix = new Array(boardSize);

for (let i = 0; i < boardSize; i++) {
  tilesMatrix[i] = new Array(boardSize);
}

// setup the game stage
var bgWidth = 2000;
var bgHeight = 1080;
var bgMoveX = 20;
var bgMoveY = 10;
var roomWidth = 227;
var roomHeight = 227;
var roomMoveX = 720;
var roomMoveY = 356;
var spaceBetweenRooms = 30;
var gameOver = false;

let instruction;
let lightSwitch;
let win;
let bgMusic;

var instr   = true;
var back    = false;
var mult    = 1;
var LOOP    = 2;

/**
 * Put The Lights Out Game
 */
class GameScene5 extends Phaser.Scene {
  constructor() {
    super({key: 'GameScene5'});
  }
  
  preload() {
    // load background
    this.load.image('background0', '../img/house0.png');
    this.load.image('background1', '../img/house1.png');
    this.load.image('instruction', '../img/instruction_lights.png');

    this.load.audio('win', '../sound/3win.mp3');
    this.load.audio('light', '../img/lightSwitch.mp3');
    this.load.audio('bgmusic', '../img/bgMusic1.mp3');


    // load on-off lights
    var roomNo = 1;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        this.load.image('on_' + i + j, '../img/room' + roomNo + 'on.png');
	      this.load.image('off_' + i + j, '../img/room' + roomNo + 'off.png');
        roomNo++;
      }
    }
  }

  create() {
    bgMusic = this.sound.add('bgmusic');
    bgMusic.play();

    lightSwitch = this.sound.add('light');
    win = this.sound.add('win');
    instruction = this.add.image(350, 100, 'instruction').setDepth(2);
    
    if (boardSize === 2) {
      background = this.add.image(bgWidth / 2 - bgMoveX, bgHeight / 2 - bgMoveY, 'background0');
    } else if (boardSize === 3) {
      background = this.add.image(bgWidth / 2 - bgMoveX, bgHeight / 2 - bgMoveY, 'background1');
    }

  	// create the grid
    var countOff = 0;
   
  	for (var i = 0; i < boardSize; i++) {
  	  for (var j = 0; j < boardSize; j++) {
  		  var x = i * roomWidth + roomMoveX + i * spaceBetweenRooms;
  		  var y = j * roomHeight + roomMoveY + j * spaceBetweenRooms;
        var onOrOff = this.randomIntFromInterval(1, 2);
        
        if (onOrOff === 1) {
          countOff++;
        }

        var tile = this.add.sprite(x, y, (onOrOff === 1 ? 'on_' + i + j : 'off_' + i + j));
        
        // attach the pointer down event
        tile.setInteractive();
        tile.on('pointerdown', this.onTileClicked, tile);
        tilesMatrix[i][j] = tile;
      }
    }
   
    if (countOff === 0) {
      tilesMatrix[countOff][countOff] = this.add.sprite(countOff, countOff, 'on_' + countOff + countOff);
    }
  }
  
  update() {
    if (instr) {
      this.showInstruction();
    }

    instr = !instr;

    if (gameOver) {
      this.game.destroy(true);
      this.game.react.props.updateProgress(gameOver);
      this.game.react.props.handleClick();
      gameOver = !gameOver;
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onTileClicked() {
    lightSwitch.play();
    var x = Math.floor((this.x - roomMoveX) / roomWidth);
  	var y = Math.floor((this.y - roomMoveY) / roomHeight);
    
    moves++;
    let toggle = this.texture.key === 'on_' + x + y ? 'off_' + x + y : 'on_' + x + y;
    this.setTexture(toggle);
    
  	// toggle all neighbours
  	for (let i = 0; i < 4; i++) {
  	  var nx = x + dx[i];
  	  var ny = y + dy[i];
  	  if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
        let newState = tilesMatrix[nx][ny].texture.key === 'on_' + nx + ny ? 'off_' + nx + ny : 'on_' + nx + ny;
        tilesMatrix[nx][ny].setTexture(newState);
  	  }
  	}
    
    var countOn = 0;
    for (let i = 0; i < boardSize; i++) {
  	  for (let j = 0; j < boardSize; j++) {
  		  if (tilesMatrix[i][j].texture.key === 'on_' + i + j) {
          countOn++;
  		  }
  	  }
    }

    if (countOn === 0) {
      bgMusic.stop();
      win.play();

      setInterval(() => {
        gameOver = true;
      }, 3000);
    }

  }

  showInstruction() {
    var speed = 0.08
    var max = 2;
    var min = 1;

    if (instr === true) {
      if (mult < max && back === false) {                
        instruction.setScale(mult += speed);
        if (mult >= max) {
          back = true;                                        
        }                
      }

      if (mult > min && back === true) {
        instruction.setScale(mult -= speed);
        if(mult <= min){
            back = false;
            LOOP--;
        }
      }

      if (LOOP < 0) {
        instr = false;
        instruction.x = -1000;
      }
    }
  }
}
