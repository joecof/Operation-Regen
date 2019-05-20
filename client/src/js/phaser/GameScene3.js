import * as Phaser from 'phaser';

var gameWidth = window.innerWidth;
var gameHeight = window.innerHeight;

var scaleY = gameHeight / 1080;
var scaleX = gameWidth / 1920;

var timed = false;
var once = false;
var instr = false;
var control = false;
var win = false;
var instruction;
var curLoop = 0;
// var curAngle = 0;
var LOOP = 3;
var faucetY = gameHeight / 4;

var handle;
// var faucet;
var bkgr;
var water;

var targetAngle = Math.floor(Math.random() * 150) + 30;
var mult = 5; // Difficulty modifier here
var range = [mult, mult + 5, mult + 15, mult + 25];
console.log(targetAngle);

export default class GameScene4 extends Phaser.Scene {

  constructor() {
    super({
      key: 'GameScene3'
    })
  }

  preload() {
    this.load.image('instruction', '../img/Instruction3.png');
    this.load.image('sink', '../img/sink.png');
    this.load.image('faucet', '../img/faucet.png');
    this.load.image('handle', '../img/handle.png');
    this.load.spritesheet('splash', '../img/water.png', {
      frameWidth: 200,
      frameHeight: 200
    });
  }

  create() {
    var config = {
      key: 'flow',
      frames: this.anims.generateFrameNumbers('splash'),
      frameRate: 90,
      repeat: -1
    };
    this.anims.create(config);

    bkgr = this.add.image(0, 0, 'sink').setOrigin(0, 0);
    bkgr.scaleY = scaleY;
    bkgr.scaleX = scaleX;

    water = this.add.sprite(gameWidth / 2, faucetY + 180, 'splash');
    water.anims.load('flow');
    water.anims.play('flow');
    water.setScale(1.5);

    this.add.image(gameWidth / 2, faucetY, 'faucet').setScale(0.6, 0.8);
    handle = this.add.image(gameWidth / 2, gameHeight / 4.5, 'handle').setScale(0.75).setInteractive();

    this.input.setDraggable(handle);
    this.input.on('dragstart', function (pointer, gameObject) {
      if (control === true) {}
    });

    function inZone(r) {
      return handle.angle >= targetAngle - range[r] &&
        handle.angle <= targetAngle + range[r];
    }

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      if (control === true) {
        handle.angle = dragX;
        if (inZone(3)) {
          if (inZone(2)) {
            if (inZone(1)) {
              if (inZone(0)) {
                water.setScale(0);
              }
            } else {
              water.setScale(0.5);
            }
          } else {
            water.setScale(1);
          }
        } else {
          water.setScale(1.5);
        }
      }
    });

    this.input.on('dragend', function (pointer, gameObject) {
      if (control === true) {
        if (inZone(0)) {
          win = true;
        }
      }
    });

    instruction = this.add.image(gameWidth / 2, gameHeight / 1.3, 'instruction');
  }

  update() {
    if (instr === false) {
      this.instruct();
    } else if (timed === false && once === false) {
      this.time.delayedCall(1250, function () {
        timed = true;
      }, [], this);
    } else if (timed === true && once === false) {
      if (instruction.y < gameHeight + 150) {
        instruction.y += 25;
      } else {
        timed = false;
        once = true;
      }
    }
    if (timed === false && once === true) {
      control = true;
    }
    if (win === true) {
      //Transition here
    }
  }

  instruct() {
    if (curLoop <= LOOP) {
      if (curLoop === 0 || curLoop === 2) {
        if (instruction.angle !== -180) {
          instruction.angle += 5;
        } else {
          curLoop++;
        }
      } else if (curLoop === 1) {
        if (instruction.angle !== -95) {
          instruction.angle -= 5;
        } else {
          curLoop++;
        }
      } else if (curLoop === 3) {
        if (instruction.angle !== 0) {
          instruction.angle += 5;
        } else {
          curLoop++;
        }
      }
    } else {
      instr = true;
    }

  }

}