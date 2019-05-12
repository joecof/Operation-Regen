import Phaser from 'phaser';


class config {
  preload = () => {
      this.load.setBaseUrl('http://labs.phaser.io');   //what reference should this be having? It is not just the Phaser object
      this.load.image('sky', 'assets/skies/space3.png');
  }
 
  create = () => {
      this.add.image(400, 300, 'sky');
  }

  get config() {
      return {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          physics: {
            default: 'arcade',
            arcade: {
              gravity: { y: 200 }
            }
          },
          scene: {
              preload: this.preload,
              create: this.create
          }
      };
  }
}

export default config;