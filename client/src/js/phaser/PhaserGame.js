import * as Phaser from 'phaser';

import GameScene1 from './PhaserGame1';
import GameScene2 from './PhaserGame2';
import GameScene3 from './PhaserGame3';
import GameScene4 from './PhaserGame4';
import GameScene5 from './PhaserGame5';

// import LoadingScene from './LoadingScene';


let scene = [GameScene1, GameScene2, GameScene3, GameScene4, GameScene5];
let randomScene = Math.floor(Math.random() * scene.length);

export default class PhaserGame extends Phaser.Game {

  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'GameContainer',
      width: window.innerWidth,
      height: window.innerHeight,
      /*render: {
        pixelArt: true
      },*/
      pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
      },
      scene: GameScene5
    }
    super(config);
    this.react = react;
  }

}
