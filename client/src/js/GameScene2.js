import * as Phaser from 'phaser'



export default class GameScene2 extends Phaser.Scene {  
  constructor() {
    super({ key: 'GameScene2', active: true })
  }

  preload() {

  }

  create() {
    this.add.text(400,200, 'Second Scene');
  }
}