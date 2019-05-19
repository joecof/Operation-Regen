import * as Phaser from 'phaser';

import GameScene from './GameScene';
import GameScene2 from './GameScene2';
import GameScene3 from './GameScene3';
import GameScene4 from './GameScene4';

import TitleScene from './TitleScene';
import LoadingScene from './LoadingScene';
import TransitionScene from './TransitionScene';

let scene = [GameScene4];

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
      scene:  scene
    }
    super(config);
    this.react = react;
  }
}
