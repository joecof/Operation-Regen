import * as Phaser from 'phaser'

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene'})
  }

  preload() {
    this.load.image('logo', '../img/logo.png');

    for (var i = 0; i < 200; i++) {
      this.load.image('logo'+i, '../img/logo.png');
  }

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Saving the World Needs to Load...',
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
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
      percentText.setText(parseInt(value * 100) + '%');
  });
                
    this.load.on('fileprogress', function (file) {

    });
    
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
  }

}

