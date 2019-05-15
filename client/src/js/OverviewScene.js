import Phaser from 'phaser';

class OverviewScene extends Phaser.Scene {

  constructor() {
    super({key: "OverviewScene"});    
  }

  preload() {
    this.load.image('sky', 'https://img.itch.zone/aW1hZ2UvMTMwMDQ5LzU5OTgzMi5wbmc=/original/c0%2Fhep.png');
  }

  create() {
    this.add.image(400, 300, 'sky');
  }
}

export default OverviewScene;