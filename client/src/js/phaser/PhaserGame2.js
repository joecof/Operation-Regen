import * as Phaser from 'phaser';

/**
 * Bring The Trash To The Truck Game
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
        pixalArt: true
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: GameScene2
    }
    super(config);
    this.react = react;
  }
}

/**
 * Global variables
 */
var gameWidth   = window.innerWidth;
var gameHeight  = window.innerHeight;
var scaleY      = gameHeight / 1080;
var scaleX      = gameWidth / 1776;       
var bkgr;    
var truck;
var instruction;
var garbage;

var river;
var pickup;
var loaded;
var run;
let winSound;

let gameWon   = false;
let gameLost  = false;
var instr     = true;
var drag      = false;
var win       = false;
var lose      = false;
var back      = false;
var mult      = 1;
var LOOP      = 2;
var angle     = 0;
var target    = 2;
var initX     = -100;
var speed     = 5 + (Math.random() * 5);
var speedY    = 0;
var height    = gameHeight / 1.15;

/**
 * Bring The Trash To The Truck Game
 */
class GameScene2 extends Phaser.Scene {
  constructor() {
    super({key: 'GameScene2'});
  }

  preload() {
    this.load.spritesheet('background', '../img/riverSheet.png',{ frameWidth: 1776, frameHeight: 1080 });
    this.load.spritesheet('backgroundLoss', '../img/riverSheetLoss.png',{ frameWidth: 1776, frameHeight: 1080 });
    this.load.image('truck', '../img/Truck.png');
    this.load.image('garbage', '../img/trash.png');
    this.load.image('garbageP', '../img/trashPicked.png');
    this.load.image('instruction', '../img/instruction_river.png');

    this.load.audio('pick', '../img/pickup.mp3');
    this.load.audio('river', '../img/river.mp3');
    this.load.audio('truck', '../img/sound.wav');
    this.load.audio('loaded', '../img/winAlt.mp3');
    this.load.audio('win', '../sound/3win.mp3');
  }

  create() {
    var config  = {
      key: 'flow',
      frames: this.anims.generateFrameNumbers('background'),
      frameRate: 24,
      repeat: -1
    };

    this.anims.create(config);

    river    = this.sound.add('river');   
    pickup   = this.sound.add('pick');
    run    = this.sound.add('truck');
    loaded = this.sound.add('loaded');
    winSound = this.sound.add('win');
    
    river.play();

    bkgr  = this.add.sprite(0, 0, 'background').setOrigin(0,0);
    bkgr.scaleY  = scaleY;
    bkgr.scaleX  = scaleX;
    bkgr.anims.load('flow');
    bkgr.anims.play('flow');

    truck = this.add.image(gameWidth/7,gameHeight/1.65, 'truck');
    truck.setScale(1.5);

    instruction = this.add.image(gameWidth / 2, (gameHeight - 45) / 2, 'instruction').setScale(1.5);

    garbage = this.add.image(initX, gameHeight / 1.15, 'garbage').setInteractive();
    garbage.setScale(1.25);
    this.input.setDraggable(garbage);

    this.input.on('dragstart', function (pointer, gameObject) {
      pickup.play();
      garbage.setTexture('garbageP');
      drag = true;
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      if (gameObject.x < truck.x + 192 && gameObject.x > truck.x - 192
        && gameObject.y < truck.y + 62 && gameObject.y > truck.y - 62) {
        truck.setScale(2);
      } else {
        truck.setScale(1.5);
      }
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragend', function (pointer, gameObject) {
      if (gameObject.x < truck.x + 192 && gameObject.x > truck.x - 192
        && gameObject.y < truck.y + 62 && gameObject.y > truck.y - 62) {
          truck.setScale(1.5);
          loaded.play();
          target--;
          if (target < 0) {
            winSound.play();
            win = true;
          }                
          var rand    = gameHeight / 1.15 + (Math.random() * 40 + 10);
          height      = rand;
          garbage.x   = initX;
          garbage.y   = height;
          speed       = 5 + (Math.random() * 5);                
      }
      speedY  = 15;
      drag    = false;
    });
  }

  update() {

    if (instr === true) {
      this.showInstruction();
    } else if (drag === false && win === false && lose === false) {            
      this.throwTrash();
    } else if (win === true) {
      if (truck.x > -250) {
        truck.x -= 5;
        angle   += 3;
        truck.y += (1.25 * Math.cos(15 * angle))
        setInterval(() => {
          gameWon = true
        }, 3000)

      } else {
      }            
    } else if (lose === true) {
      bkgr.setTexture('backgroundLoss');

      setInterval(() => {
        gameLost = true;
      }, 1000)
    }

    if (gameWon) {

      console.log(this.scene.isActive('GameScene1'))

      this.game.destroy(true);
      this.game.react.props.updateProgress(gameWon);
      this.game.react.props.toggleTransition(); 
      
    }
    
    if (gameLost) {
      this.game.destroy(true);
      this.game.react.props.updateProgress(!gameLost);
      this.game.react.props.toggleTransition();
    }
  }

  showInstruction() {
    var speed = 0.04
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
        if (mult <= min) {
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

  throwTrash() {
    if (garbage.y < height) {
      garbage.x -= speed;
      garbage.y += speedY;
    } else {
      garbage.setTexture('garbage');
      speedY = 0;
    }
    if (garbage.x < gameWidth + 30) {            
        garbage.x += speed;            
    } else {            
      garbage.x = initX;
      garbage.y = height;
      lose = true;
    }
  }
}
