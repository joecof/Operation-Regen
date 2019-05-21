import * as Phaser from 'phaser';

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
//var spaceBetweenTiles = 2;
var gameWidth   = window.innerWidth;
var gameHeight  = window.innerHeight; 
//var width = boardSize * 227; //+ 2 * spaceBetweenTiles;
//var height = boardSize * 227; //+ 2 * spaceBetweenTiles;

export default class GameScene5 extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene5'
    });
  }
  
  preload() {
    // load background
    this.load.image('background', '../img/house0.png');
    
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
    background = this.add.image(965, 540, 'background');
    background.scaleY = 1.0;
    background.scaleX = 1.0;

  	// create the grid
    var countOff = 0;
   
  	for (var i = 0; i < boardSize; i++) {
  	  for (var j = 0; j < boardSize; j++) {
  		  var x = i * 227; // + 692  + i * spaceBetweenTiles; 
  		  var y = j * 227; // + 354  + j * spaceBetweenTiles;  
        var onOrOff = this.randomIntFromInterval(1, 2);
        
        if (onOrOff === 1) {
          countOff++;
        }

        var tile = this.add.sprite(x, y, (onOrOff === 1 ? 'on_' + i + j : 'off_' + i + j));
        //tile.scaleX = 1.2;
        //tile.scaleY = 1.2;
        
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
  }
  
  /*
  toggle(tile, x, y) {
    var newState = tile.texture.key === 'on_' + x + y ? 'off_' + x + y : 'on_' + x + y;
    tile.setTexture(newState);
  }
  */

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onTileClicked() {
    var x = Math.floor(this.x / 227);
  	var y = Math.floor(this.y / 227);
    
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
    //this.checkGameOver();
    var gameOver = true;// = this.areAllStatesOff();
    for (let i = 0; i < boardSize; i++) {
  	  for (let j = 0; j < boardSize; j++) {
  		  if (tilesMatrix[i][j].key !== 'off_' + i + j) {
          gameOver = false;
          break;
  		  }
  	  }
  	}
    
  	if(gameOver) {
  	  //alert('Moves: ' + moves);
  	}
  }

  /*
  areAllStatesOff() {
  	for (let i = 0; i < boardSize; i++) {
  	  for (let j = 0; j < boardSize; j++) {
  		  if (tilesMatrix[i][j].key !== 'off_' + i + j) {
  	  	  return false;
  		  }
  	  }
  	}
  	return true;
  }
  */
  
  /*
  checkGameOver() {
  	var gameOver = this.areAllStatesOff();  
  	if(gameOver) {
  	  alert('Moves: ' + moves);
  	}
  }
  */
}
