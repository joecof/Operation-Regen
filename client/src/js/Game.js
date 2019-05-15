import * as Phaser from 'phaser';
import GameScene from './GameScene';
import GameScene2 from './GameScene2';

import titleScene from './titleScene';
import LoadingScene from './LoadingScene';
import TransitionScene from './TransitionScene';

export default class Game extends Phaser.Game {
  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: window.innerWidth,
      height: window.innerHeight,
      autoCenter: Phaser.Scale.CENTER_BOTH,
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
      scene:  [LoadingScene, titleScene, GameScene2, TransitionScene, GameScene]
    }

    super(config);
    this.react = react;
  }

}
