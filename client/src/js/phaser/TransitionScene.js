import * as Phaser from 'phaser'

export default class TransitionScene extends Phaser.Scene {  
  constructor() {
    super({ key: 'TransitionScene'})
  }

  preload() {

    this.load.image('bg1', "../img/river4.png");
    this.load.image('hero1', "../img/hero5H.png");
    this.load.image('hearts1', "../img/lives4.png");
    this.load.image('regen1', "../img/regen.png");
    this.load.image('giveup1', "../img/giveup.png");
    this.load.audio('sound', "../img/temp.mp3");

  }

  create() {
    this.add.image(this.game.renderer.width / 1.3, this.game.renderer.height * 0.8, "hero1").setDepth(2).setScale(1.75);
    let playButton = this.add.image(this.game.renderer.width / 1.7, this.game.renderer.height * 0.85, "regen1").setDepth(2);
    this.add.image(this.game.renderer.width / 2.6, this.game.renderer.height * 0.85, "giveup1").setDepth(2);
    this.add.text(this.game.renderer.width / 3, this.game.renderer.height * 0.2, "Level 2: Warm Up", { fontSize: '32px', fill: '#000' }).setDepth(2);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.4, "hearts1").setDepth(2).setScale(0.75, 0.75);
    this.add.image(400,300,'bg1').setDepth(0).setScale(0.6);
    this.add.text(16, 16, 'score: 100', { fontSize: '32px', fill: '#000' });
    
    playButton.setInteractive();
    playButton.on('pointover', () => {
    })

    playButton.on('pointerout', () => {
    })

    playButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    })

    this.sound.add("sound",{
      loop: true
    })
  }
} 