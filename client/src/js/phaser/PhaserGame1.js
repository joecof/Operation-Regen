import * as Phaser from 'phaser';

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
      scene: GameScene1
    }
    super(config);
    this.react = react;
  }
}

var instr   = false;    
var win     = false;
var lose    = false;
var gameWidth   = window.innerWidth;
var gameHeight  = window.innerHeight;  
var angle       = 0;
var speed       = gameWidth/100;
var randNum     = Math.random() * 1700 + 100;

var bulldozer;
var bg;
var instruction;
var tree;

class GameScene1 extends Phaser.Scene {

  constructor(){
    super({key: "GameScene1"})
  }

  preload(){
  
    this.load.image('background', '../img/bkgr.png');
    this.load.image('tree', '../img/tree.png');
    this.load.image('bull', '../img/enemy.png');
    instruction = this.load.image('instruction', '../img/Instruction1.png');
    
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
    if(bulldozer.y < gameHeight * 2){                     
        angle += 0.25;
        bulldozer.angle += 30;
        bulldozer.x += 10;
        bulldozer.y += (80 * Math.cos(0.1 * angle + 92) + 10);
        
    } else {
      this.game.destroy();
      this.game.react.props.toggleTransition();

    }

  }

 loserLoop(){
    if(tree.angle <= 450 || bulldozer.x < tree.x + 20){
        tree.angle += 5;
        tree.x += 26;
        tree.y += (50 * Math.cos(0.1 * angle + 42) + 10);
    } else {
    }
  }

  create() {

    bg          = this.add.sprite(0, 0, 'background').setOrigin(0,0);
    tree        = this.add.image(1200, gameHeight/2 + 80, 'tree');
    bulldozer   = this.add.image(-300, gameHeight/2 + 120, 'bull').setInteractive();
    instruction = this.add.image(-700, gameHeight/2 - 250, 'instruction');        

    var scaleY = gameHeight / 1080;
    var scaleX = gameWidth / 1776;
    bg.scaleY  = scaleY;
    bg.scaleX  = scaleX;
    bulldozer.setScale(2.5);

    bulldozer.on('pointover', () => {
    })

    bulldozer.on('pointerout', () => {
    })
    
    bulldozer.on('pointerdown', function (pointer) {

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
        this.loserLoop();

    }

  }

  
} 