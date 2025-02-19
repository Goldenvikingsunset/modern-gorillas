export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    console.log('MainScene: preload');
  }

  create() {
    console.log('MainScene: create');
    const text = this.add.text(400, 300, 'Modern Gorillas', {
      color: '#ffffff',
      fontSize: '32px'
    });
    text.setOrigin(0.5);
  }

  update() {
    // Game loop
  }
}