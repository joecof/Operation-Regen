import * as Phaser from 'phaser';
import GameScene from './GameScene';
import GameScene2 from './GameScene2';

export default class Game extends Phaser.Game {
  constructor(react) {

    const config = {
      type: Phaser.AUTO,
      parent: 'gameContainer',
      width: 800,
      height: 600,
      scene:  [GameScene, GameScene2]
    }
    super(config);
    this.react = react;
  }

}