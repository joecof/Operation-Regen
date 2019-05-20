import * as Phaser from 'phaser'

  var gameWidth   = window.innerWidth;
  var gameHeight  = window.innerHeight;
  var scaleY = gameHeight / 1080;
  var scaleX = gameWidth / 1776;       
  var bkgr;    
  var truck;
  var instruction;
  var garbage;

  var instr   = true;
  var drag    = false;
  var drop    = false;
  var win     = false;
  var lose    = false;
  var back    = false;
  var mult    = 1;
  var LOOP    = 2;
  var angle   = 0;
  var target  = 5;

  var initX   = -100;
  var speed   = 5 + (Math.random() * 5);
  var speedY  = 0;
  var height  = gameHeight/1.15;


export default class GameScene3 extends Phaser.Scene {

  constructor() {
    super({ key: 'GameScene3'})
  }

  preload() {
    this.load.spritesheet('background', '../img/riverSheet.png',{ frameWidth: 1776, frameHeight: 1080 });
    this.load.spritesheet('backgroundLoss', '../img/riverSheetLoss.png',{ frameWidth: 1776, frameHeight: 1080 });
    this.load.image('truck', '../img/Truck.png');
    this.load.image('garbage', '../img/trash.png');
    this.load.image('garbageP', '../img/trashPicked.png');
    this.load.image('instruction', '../img/Instruction.png');
  }

  create() {

    var config  = {
      key: 'flow',
      frames: this.anims.generateFrameNumbers('background'),
      frameRate: 24,
      repeat: -1
    };

    this.anims.create(config);

    bkgr  = this.add.sprite(0, 0, 'background').setOrigin(0,0);
    bkgr.scaleY  = scaleY;
    bkgr.scaleX  = scaleX;
    bkgr.anims.load('flow');
    bkgr.anims.play('flow');

    truck = this.add.image(gameWidth/7,gameHeight/1.65, 'truck');
    truck.setScale(1.5);

    instruction = this.add.image(gameWidth/2,(gameHeight - 45)/2, 'instruction');

    garbage = this.add.image(initX, gameHeight/1.15, 'garbage').setInteractive();        
    garbage.setScale(1.25);
    this.input.setDraggable(garbage);

    this.input.on('dragstart', function (pointer, gameObject) {
        garbage.setTexture('garbageP');
        drag = true;
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        if(gameObject.x < truck.x + 192 && gameObject.x > truck.x - 192
        && gameObject.y < truck.y + 62 && gameObject.y > truck.y - 62){
            truck.setScale(2);
        } else{
            truck.setScale(1.5);
        }
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    this.input.on('dragend', function (pointer, gameObject) {
        if(gameObject.x < truck.x + 192 && gameObject.x > truck.x - 192
        && gameObject.y < truck.y + 62 && gameObject.y > truck.y - 62){
            truck.setScale(1.5);
            target--;
            if(target < 0){
                win = true;
            }                

            var rand    = gameHeight/1.15 + (Math.random()*40 + 10);
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

    if(instr === true){
        this.showInstruction();
    } else if(drag === false && win === false && lose === false){            
        this.throwTrash();
    } else if(win === true){
        if(truck.x > -250){
            truck.x -= 5;
            angle   += 3;
            truck.y += (1.25*Math.cos(15 * angle));
        } else {

            //Transition here
        }            
    } else if(lose == true){
        bkgr.setTexture('backgroundLoss');
        //Transition here
    }
  }

  showInstruction(){
    var speed = 0.04
    var max = 2;
    var min = 1;
    if(instr === true){
        if(mult < max && back === false){                
            instruction.setScale(mult += speed);
            if(mult >= max){
                back = true;                                        
            }                
        }
        if(mult > min && back === true){
            instruction.setScale(mult -= speed);
            if(mult <= min){
                back = false;
                LOOP--;
            }
        }
        if(LOOP < 0){
            instr = false;
            instruction.x = -1000;
        }
    }
  }

  throwTrash(){
    if(garbage.y < height){
        garbage.x -= speed;
        garbage.y += speedY;
    } else {
        garbage.setTexture('garbage');
        speedY = 0;
    }
    if(garbage.x < gameWidth + 30){            
        garbage.x += speed;            
    } else{            
        garbage.x = initX;
        garbage.y = height;
        lose = true;
    }
  }
}