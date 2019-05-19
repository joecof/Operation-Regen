import * as Phaser from 'phaser'


let loadingDone = false;

let randomQuotes = [
  '"Peace begins with a smile.."',
  '"Don’t Let Yesterday Take Up Too Much Of Today"' ,
  '"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough"',
  '"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do"'
]

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene'})
  }


  preload() {
    this.load.image('logo'+i, '../img/icon.png');

    for (var i = 0; i < 250; i++) {
      this.load.image('logo'+i, '../img/logo.png');
  }

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: randomQuotes[Math.floor(Math.random() * randomQuotes.length)],
        style: {
            font: '20px monospace',
            fill: '#ffffff'
        }
    });

    
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
          font: '18px monospace',
          fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
  
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
  });
                
    this.load.on('fileprogress', function (file) {

    });
    
    this.load.on('complete', function () {

      loadingText.destroy();
      percentText.destroy();

      loadingDone = true;
    });
  }

  create() {

    if(loadingDone === true) {
      this.scene.start('GameScene');
    }
  }

}

