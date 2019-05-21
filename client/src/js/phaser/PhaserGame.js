import * as Phaser from 'phaser';

import GameScene1 from './GameScene1';
import GameScene2 from './GameScene2';
import GameScene3 from './GameScene3';
import GameScene4 from './GameScene4';
import GameScene5 from './GameScene5';

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
