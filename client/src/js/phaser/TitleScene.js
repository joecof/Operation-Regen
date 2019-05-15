import * as Phaser from 'phaser'

export default class TitleScene extends Phaser.Scene {  
  constructor() {
    super({ key: 'titleScene', active: true })
  }

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

    this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    this.add.tileSprite(this.game.renderer.width / 2, this.game.renderer.height / 2, 0, 0, 'bg');


    playButton.setInteractive();
    playButton.on('pointover', () => {
    })

    playButton.on('pointerout', () => {
    })

    playButton.on('pointerdown', () => {
      this.scene.start('GameScene2');
      console.log('regen');
    })
  }
} 