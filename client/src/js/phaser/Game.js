import * as Phaser from 'phaser';

import GameScene1 from './GameScene1';
import GameScene2 from './GameScene2';
import GameScene3 from './GameScene3';

// import LoadingScene from './LoadingScene';


let scene = [GameScene1, GameScene2, GameScene3];
let randomScene = Math.floor(Math.random() * scene.length);

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
        pixalArt: true
      },
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
      scene:  GameScene1
    }
    super(config);
    this.react = react;
  }
}
