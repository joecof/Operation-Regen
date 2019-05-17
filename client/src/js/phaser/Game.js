import * as Phaser from 'phaser';

import GameScene from './GameScene';
import GameScene2 from './GameScene2';

import TitleScene from './TitleScene';
import LoadingScene from './LoadingScene';
import TransitionScene from './TransitionScene';

let scene = [GameScene];

export default class Game extends Phaser.Game {
  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: 1000,
      height: 800,
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