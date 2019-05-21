import * as Phaser from 'phaser';

var player;
var trash;

var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var target;

export default class GameScene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'GameIvan' });
    }
    preload() {
        //load image
        this.load.image('bgImg', ' ../img/transitionbase9.png');
        this.load.image('platform', '../img/platform.png');
        this.load.image('trash', '../img/trashPicked.png');
        this.load.image('dude', '../img/garbageman.png');
        this.load.image('target', '../img/trashcan.png');
    }

    create() {
        //  add image
        this.add.image(0, 0, 'bgImg').setOrigin(0, 0);
        platforms = this.physics.add.staticGroup();
        // platforms.create(400, 568, 'platform').setScale(2).refreshBody();
        platforms.create(1200, 800, 'platform');
        platforms.create(50, 250, 'platform');
        platforms.create(750, 220, 'platform');
       // platforms.create(200, 250, 'platform');

        player = this.physics.add.sprite(100, 0, 'dude').setScale(0.5);
        target = this.physics.add.sprite(700, 0, 'target').setScale(0.4)

        player.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();

        // three trash to collect
        trash = this.physics.add.group({
            key: 'trash',
            repeat: 2,
            setXY: { x: 100, y: 0, stepX: 150 }
        });

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(trash, platforms);
        this.physics.add.collider(target, platforms);
        this.physics.add.overlap(target, trash, this.reachTarget, null, this);
        
    }
    
    //update
    update() {
        
        if(player.y>700){
            alert('game over')
            this.physics.pause();
            player.setTint(0xff0000);
            gameOver = true;
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
            player.setVelocityY(-330);
        }
    }
    //reach target
    reachTarget(target, trash) {
        trash.disableBody(true, true);
        score += 10;
        scoreText.setText('Score: ' + score);

        if(score == 20) {
            this.game.react.props.toggleTransition();

        }
    }


    // push left
    pushLeft(player, trash) {
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
        if (trash.x > player.x) {
            trash.x = player.x + 50;
            trash.y = player.y
        }
        if (trash.x < player.x) {

            trash.x = player.x - 40;
            trash.y = player.y
        }
    }
}