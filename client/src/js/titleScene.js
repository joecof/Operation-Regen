import * as Phaser from 'phaser'

var score = 0;
var scoreText;


export default class titleScene extends Phaser.Scene {  
  constructor() {
    super({ key: 'titleScene', active: true })
  }

  // adjustSize(width, height) {
  //   this.game.renderer.width / (width);
  //   this.game.renderer.height / (height);
  // }

  preload() {
    this.load.image('bg', "../img/transitionbase9.png");
    this.load.image('hero', "../img/hero5H.png");
    this.load.image('hearts', "../img/lives5.png");
    this.load.image('regen', "../img/regen.png");
    this.load.image('giveup', "../img/giveup.png");
    this.load.audio('sound', "../img/temp.mp3");
  }

  create() {
    this.add.image(this.game.renderer.width / 1.3, this.game.renderer.height * 0.8, "hero").setDepth(2).setScale(1.75);
    let playButton = this.add.image(this.game.renderer.width / 1.7, this.game.renderer.height * 0.85, "regen").setDepth(2);
    this.add.image(this.game.renderer.width / 2.6, this.game.renderer.height * 0.85, "giveup").setDepth(2);
    this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.2, "Level 1: Warm Up", { fontSize: '32px', fill: '#000' }).setDepth(2);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.4, "hearts").setDepth(2).setScale(0.75, 0.75);
    // this.add.image(400,300,'bg').setDepth(0).setScale(0.6);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.5, "bg").setDepth(0).setScale(0.75, 0.75);


    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    playButton.setInteractive();
    playButton.on('pointover', () => {
    })

    playButton.on('pointerout', () => {
    })

    playButton.on('pointerdown', () => {
      this.scene.start('GameScene2');
      console.log('regen');
    })

    // this.sound.add("sound",{
    //   loop: true
    // })


    // reset.setInteractive();

    // reset.on('pointover', () => {
    // })

    // reset.on('pointerout', () => {
    // })

    // reset.on('pointerdown', () => {
    //   this.sound.stopAll(true)
    // });


    // this.sound.play("sound");
  }
} 