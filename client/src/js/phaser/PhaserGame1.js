import * as Phaser from 'phaser';

/**
 * Stop The Bulldozer Game
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
          gravity: {y: 300},
          debug: false
        }
      },
      scene: GameScene1
    }
    super(config);
    this.react = react;
  }
}

/**
 * Global variables
 */
let temp = true;
var instr       = false;    
var win         = false;
var lose        = false;

var gameLost    = false;
var gameWon     = false;
var gameWidth   = window.innerWidth;
var gameHeight  = window.innerHeight;  
var angle       = 0;
var speed       = gameWidth/200;
var randNum     = Math.random() * 1700 + 100;

var trucksfx;
var truckflip;
var treeflip;

var bulldozer;
var bg;
var instruction;
var tree;

/**
 * Stop The Bulldozer Game
 */
class GameScene1 extends Phaser.Scene {
  constructor() {
    super({key: "GameScene1"});
  }

  preload() {
    instruction = this.load.image('instruction', '../img/instruction_bulldozer.png');
    this.load.image('background', '../img/bkgr.png');
    this.load.image('tree', '../img/tree.png');
    this.load.image('bull', '../img/enemy.png');
    this.load.audio('truck', '../img/sound.wav');
    this.load.audio('win', '../sound/3win.mp3');
    this.load.audio('lose', '../img/Treed.wav');

  }

  drawBull() {
    if (bulldozer.x < gameWidth && bulldozer.x < tree.x) {
        bulldozer.x += speed;
        angle += 3;
        bulldozer.y += (1.25*Math.cos(15 * angle));
    } else if (bulldozer.x >= tree.x) {
        angle   = 0;
        treeflip.play();
        lose = true;

        setInterval(() => {
          gameLost = true;
        }, 1000);

    } else if (bulldozer.x >= gameWidth) {
        bulldozer.x = -200;
    }    
  }

  showInstruction() {
    var slowS 	= (gameWidth - 690)/3;
    var slowE 	= slowS + 250;
    var trigger = gameWidth + randNum;
    var speed2	= speed * 1.75;

    if (instruction.x < slowS) { 
        instruction.x += speed2;     
    } else if (instruction.x >= slowS && instruction.x < slowE) {
        instruction.x += 5;
    } else if (instruction.x >= slowE && instruction.x < trigger) {
        instruction.x += speed2;     
    } else if (instruction.x >= trigger) {
        instr = true;
    }
  }
  
  victoryLoop() {
    if (bulldozer.y < gameHeight * 2) {
        angle += 0.25;
        bulldozer.angle += 30;
        bulldozer.x += 10;
        bulldozer.y += (80 * Math.cos(0.1 * angle + 92) + 10);
    } else {

      setInterval(() => {
        gameWon = true;
      }, 2200);
    }

  }

  loserLoop() {
    if (tree.angle <= 450 || bulldozer.x < tree.x + 20) {
        tree.angle += 5;
        tree.x += 26;
        tree.y += (50 * Math.cos(0.1 * angle + 42) + 10);
    } else {
    }
  }

  create() {
    bg          = this.add.sprite(0, 0, 'background').setOrigin(0,0);
    tree        = this.add.image(1200, gameHeight/2 + 80, 'tree').setScale(1.5);
    bulldozer   = this.add.image(-300, gameHeight/2 + 120, 'bull').setInteractive();
    instruction = this.add.image(-700, gameHeight/2 - 250, 'instruction').setScale(1.5);

    var scaleY = gameHeight / 1080;
    var scaleX = gameWidth / 1776;
    bg.scaleY  = scaleY;
    bg.scaleX  = scaleX;
    bulldozer.setScale(2.5);

    trucksfx    = this.sound.add('truck');  
    treeflip   = this.sound.add('lose');
    truckflip   = this.sound.add('win');

    trucksfx.play();

    bulldozer.on('pointover', () => {
    })

    bulldozer.on('pointerout', () => {
    })
    
    bulldozer.on('pointerdown', function (pointer) {
      trucksfx.stop();
      win = true;
      angle = 0;
      truckflip.play();
    });

  }

  update() {
    if (instr === false && win === false && lose === false) {
      this.showInstruction();
    } else if (instr === true && win === false && lose === false) {				
      this.drawBull();				
    } else if (win === true){
      this.victoryLoop();
    } else if (lose === true){
      this.loserLoop();
    }

    if (gameLost === true) {

      this.game.react.props.updateProgress(gameWon);
      this.game.react.props.toggleTransition();
        

    } else {

    }

    if (gameWon) {      
      this.game.destroy();
      this.game.react.props.toggleTransition();
    } 
  }
}
