import * as Phaser from 'phaser'
import img from '../img/hero1H.png'
import img2 from '../img/Truck.png'
import img3 from '../img/river4.png'



export default class GameScene extends Phaser.Scene {  
  constructor() {
    super({ key: 'GameScene' })
  }



  preload() {

    this.load.image('img3', img3);
    this.load.image('img', {img}.img);

    console.log({img3});



    console.log(img2);
    console.log(img3);
    console.log(img);

  }

  create() {

    this.add.image(400, 300, 'img3');
    this.add.text(200,500, 'Hello World');
    this.add.text(400,500, 'WOOOOOOOOOO!!!!');
    

    // this.textures.addBase64(img, data);




   





  }
}