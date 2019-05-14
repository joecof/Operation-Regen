import * as Phaser from 'phaser'

var instr   = false;    
var win     = false;
var lose    = false;
var gameWidth   = 800;
var gameHeight  = 600;  
var angle       = 0;
var speed       = gameWidth/135;
var randNum     = Math.random() * 1700 + 100;

var bulldozer;
var bg;
var instruction;
var tree;

export default class GameScene2 extends Phaser.Scene {

  constructor(){
    super({key: "GameScene2"})
  }

  preload(){
    this.load.image('background', '../img/bkgr.png');
    this.load.image('tree', '../img/tree.png');
    this.load.image('bull', '../img/enemy.png');
    this.load.image('instruction', '../img/Instruction.png');

  }

  drawBull(){
    if(bulldozer.x < gameWidth && bulldozer.x < tree.x){
        bulldozer.x += speed;
        angle += 3;
        bulldozer.y += (1.25*Math.cos(15 * angle));
    } else if(bulldozer.x >= tree.x){
        angle   = 0;
        lose    = true;
    } else if(bulldozer.x >= gameWidth){
        bulldozer.x = -200;
    }
  }

  showInstruction(){
    var slowS 	= (gameWidth - 690)/3;
    var slowE 	= slowS + 250;
    var trigger = gameWidth + randNum;
    var speed2	= speed * 1.75;

    if(instruction.x < slowS){ 
        instruction.x += speed2;     
    } else if (instruction.x >= slowS && instruction.x < slowE){
        instruction.x += 5;
    } else if (instruction.x >= slowE && instruction.x < trigger){
        instruction.x += speed2;     
    } else if (instruction.x >= trigger){
        instr = true;
    }
  }
  
  victoryLoop(){
    if(bulldozer.x < gameWidth * 2){                     
        angle += 0.25;
        bulldozer.angle += 30;
        bulldozer.x += 10;
        bulldozer.y += (80 * Math.cos(0.1 * angle + 92) + 10);
    } else {
      this.scene.start('TransitionScene');
    }

  }

 loserLoop(){
    if(tree.angle <= 450){
        tree.angle += 5;
        tree.x += 26;
        tree.y += (50 * Math.cos(0.1 * angle + 42) + 10);
    } else {

    }
  }

  create() {

    bg          = this.add.image(0, 0, 'background').setOrigin(0,0);       
    tree        = this.add.image(gameWidth*0.75, gameHeight/2, 'tree').setOrigin(0,0);
    bulldozer   = this.add.image(-300, gameHeight/2 + 120, 'bull').setInteractive();
    instruction = this.add.image(-700, gameHeight/2 - 250, 'instruction').setOrigin(0,0);        

    var scaleY = gameHeight / 1080;
    var scaleX = gameWidth / 1776;
    bg.scaleY  = scaleY;
    bg.scaleX  = scaleX;
    bulldozer.setScale(2);
    bulldozer.on('pointerdown', function (pointer) {
        console.log(lose);
        if(lose === false){
            angle = 0;
            win = true;
        } else {
          
        }            
    });
  }


  update (){     
    if(instr === false && win === false && lose === false){
        this.showInstruction();
    } else if(instr === true && win === false && lose === false){				
        this.drawBull();				
    } else if(win === true){
        this.victoryLoop();
    } else if(lose === true){
      this.scene.start('TransitionScene');
        this.loserLoop();
    }
  }
} 