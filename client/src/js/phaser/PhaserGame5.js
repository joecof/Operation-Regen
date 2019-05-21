import * as Phaser from 'phaser';
import { isTSAnyKeyword } from '@babel/types';

// move by x
var dx = [ 1, -1, 0, 0 ];

// move by y
var dy = [ 0, 0, 1, -1 ];

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

export default class GameScene5 extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene5'
    });
  }
  
  preload() {
    // load background
    this.load.image('background0', '../img/house0.png');
    this.load.image('background1', '../img/house1.png');
    
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
    if (gameOver) {
      console.log("game over: " + gameOver);
      //this.game.destroy();
      gameOver = !gameOver;
      this.game.react.props.toggleTransition();
      this.game.destroy(true);
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onTileClicked() {
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
      gameOver = true;
    }
    
  	/*if(gameOver) {
  	  this.game.destroy();
      this.game.react.props.toggleTransition();
  	}*/
  }
}
