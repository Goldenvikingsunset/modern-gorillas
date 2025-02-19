export class MainScene extends Phaser.Scene {
  private gameText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    console.log('MainScene: preload');
    // Load any assets here if needed
  }

  create() {
    console.log('MainScene: create');

    this.cameras.main.setBackgroundColor('#2d2d2d');

    // Create text with enhanced styling
    this.gameText = this.add.text(400, 300, 'Modern Gorillas', {
      color: '#ffffff',
      fontSize: '64px',
      fontFamily: 'Arial',
      fontStyle: 'bold',
      stroke: '#4287f5',
      strokeThickness: 8,
      shadow: {
        offsetX: 4,
        offsetY: 4,
        color: '#000000',
        blur: 8,
        stroke: true,
        fill: true
      }
    });
    this.gameText.setOrigin(0.5);

    // Add continuous floating animation
    this.tweens.add({
      targets: this.gameText,
      y: '+=20',
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });

    // Add scale pulse animation
    this.tweens.add({
      targets: this.gameText,
      scale: 1.1,
      duration: 800,
      ease: 'Quad.inOut',
      yoyo: true,
      repeat: -1
    });

    // Add color cycling animation
    this.tweens.add({
      targets: this.gameText,
      strokeThickness: { from: 8, to: 12 },
      duration: 1200,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1,
      onUpdate: () => {
        const hue = (Date.now() * 0.1) % 360;
        this.gameText.setStroke(`hsl(${hue}, 100%, 50%)`, this.gameText.width);
      }
    });

    // Add border around the text
    const border = this.add.graphics();
    border.lineStyle(4, 0xffffff, 1);
    border.strokeRect(
      this.gameText.x - this.gameText.width / 2 - 10,
      this.gameText.y - this.gameText.height / 2 - 10,
      this.gameText.width + 20,
      this.gameText.height + 20
    );

    // Add border animation
    this.tweens.add({
      targets: border,
      alpha: { from: 1, to: 0.5 },
      duration: 1000,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }

  update() {
    // Game loop
  }
}