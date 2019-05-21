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
var width = boardSize * 227; //+ 2 * spaceBetweenTiles;
var height = boardSize * 227; //+ 2 * spaceBetweenTiles;

export default class GameScene5 extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene5'
    });
  }
  
  preload() {
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
    background = this.add.image('background').setOrigin(0,0);

  	// create the grid
    var countOff = 0;
   
  	for (var i = 0; i < boardSize; i++) {
  	  for (var j = 0; j < boardSize; j++) {
  		var x = i * 500 //+ i * spaceBetweenTiles; 
  		var y = j * 500 //+ j * spaceBetweenTiles;  
  		var onOrOff = this.randomIntFromInterval(1, 2);
      
        if (onOrOff === 1) {
          countOff++;
        }
  
    	var tile = this.add.sprite(x, y, (onOrOff === 1 ? 'on_' + i + j : 'off_' + i + j));
    	tile.inputEnabled = true;
    	// attach the input down event
        //tile.onInputDown.add(this.onTileClicked, tile);
        tile.on('pointerdown', function (pointer) {
          this.onTileClicked()
        }, this);
    	tilesMatrix[i][j] = tile;
      }
    }
   
    if (countOff === 0) {
      tilesMatrix[countOff][countOff] = this.add.sprite(countOff, countOff, 'on_' + countOff + countOff);
    }
  }
  
  update() {
  }
  
  toggle(tile, x, y) {
  	var newState = tile.key === 'on_' + x + y ? 'off_' + x + y : 'on_' + x + y;
  	tile.loadTexture(newState);
  }

  onTileClicked() {
  	var x = Math.floor(this.x / 227);
  	var y = Math.floor(this.y / 227);
   
    moves++;
    this.toggle(this, x, y);
   
  	// toggle all neighbours
  	for (var i = 0; i < 4; i++) {
  	  var nx = x + dx[i];
  	  var ny = y + dy[i];
  	  if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
  		this.toggle(tilesMatrix[nx][ny], nx, ny);
        //console.log(nx + ', ' + ny);
  	  }
  	}  
  	this.checkGameOver();
  }

  areAllStatesOff() {
  	for (var i = 0; i < boardSize; i++) {
  	  for (var j = 0; j < boardSize; j++) {
  		if (tilesMatrix[i][j].key !== 'off_' + i + j) {
  	  	  return false;
  		}
  	  }
  	}  
  	return true;
  }
  
  checkGameOver() {
  	var gameOver = this.areAllStatesOff();  
  	if(gameOver) {
  	  alert('Moves: ' + moves);
  	}
  }
  
  randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
