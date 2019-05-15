import * as Phaser from 'phaser';

import GameScene from './GameScene';
import GameScene2 from './GameScene2';

import TitleScene from './TitleScene';
import LoadingScene from './LoadingScene';
import TransitionScene from './TransitionScene';

let scene = [LoadingScene, TitleScene, GameScene2, TransitionScene, GameScene];

export default class Game extends Phaser.Game {
  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: window.innerWidth,
      height: window.innerHeight,
      scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH
      },
      render: {
        pixalArt: true
      },
      physicsConfig: {
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