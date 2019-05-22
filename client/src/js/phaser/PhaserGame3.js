import * as Phaser from 'phaser';
//ivan game
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
            scene: GameScene3
        }
        super(config);
        this.react = react;
    }
}

var player;
var trash;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var text;

let win;
let dump;
let jump;
let pickup;

var target;

var timedEvent;
var timeLast=10;
class GameScene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene3' });
    }
    preload() {
        //load image  
        // this.load.image('bgImg', ' ../img/park1.png');
        this.load.image('bgImg', ' ../img/bkgr.png');
        this.load.image('platform', '../img/platform.png');
        this.load.image('trash', '../img/trashPicked.png');
        this.load.image('dude', '../img/garbageman.png');
        this.load.image('target', '../img/trashcan.png');
        this.load.audio('win','../sound/3win.mp3');
        this.load.audio('dump','../sound/3dump.mp3');
        this.load.audio('jump','../sound/3jump.wav');
        // this.load.audio('pickup','../sound/3pickup.wav');
    }


    reduceTime ()
    {
        timeLast--;
            text.setText('timer: 0');
            this.gameOver();
            timedEvent.remove();
        }
    
    }

    create() {
        //add timer
         win = this.sound.add('win');
         dump = this.sound.add('dump');
         jump = this.sound.add('jump');
         pickup = this.sound.add('pickup');
        
    
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.reduceTime, callbackScope: this, loop: true });
        //  add image
        this.add.image(0, 0, 'bgImg').setOrigin(0, 0);
        platforms = this.physics.add.staticGroup();

        platforms.create(1200, 600, 'platform');
        platforms.create(50, 250, 'platform');
        platforms.create(750, 220, 'platform');



        player = this.physics.add.sprite(100, 0, 'dude').setScale(0.5);
        target = this.physics.add.sprite(1200, 500, 'target').setScale(0.4)

        player.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();


        trash = this.physics.add.sprite(200, 0, 'trash').setScale(0.5);
     
        text = this.add.text(16, 16, 'Timer: 10s', { fontSize: '32px', fill: '#000' });
      
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(trash, platforms);
        this.physics.add.collider(target, platforms);
        this.physics.add.overlap(target, trash, this.reachTarget, null, this);

    }

    //update
    update() {
        
        text.setText('Timer: ' + timeLast);
        if (player.y > 700) {

            this.gameOver();
        }

        
        if (gameOver) {
            return;
        }

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            this.physics.add.overlap(player, trash, this.pushLeft, null, this);

        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
            this.physics.add.overlap(player, trash, this.pushRight, null, this);
        }
        else {
            player.setVelocityX(0);
        }

        if (cursors.up.isDown && player.body.touching.down) {
            jump.play();
            player.setVelocityY(-330);
        }
    }
    //reach target
    reachTarget(target, trash) {
        trash.disableBody(true, true);
        score += 10;
        text.setText('Score: ' + score);
        //win
        if (score ===10) {
            dump.play();
            win.play();
            timedEvent.remove();
        }
    }

    // push left
    pushLeft(player, trash) {
    //    pickup.play();
        if (trash.x < player.x) {

            trash.x = player.x - 50;
            trash.y = player.y
        }
        if (trash.x > player.x) {
            trash.x = player.x + 40;
            trash.y = player.y
        }
    }
    // push right
    pushRight(player, trash) {
        // pickup.play();
        if (trash.x > player.x) {
            trash.x = player.x + 50;
            trash.y = player.y

        }
        if (trash.x < player.x) {

            trash.x = player.x - 40;
            trash.y = player.y
        }
    }

    gameOver(){
        this.physics.pause();
        player.setTint(0xff0000);
        gameOver = true;
    }
}