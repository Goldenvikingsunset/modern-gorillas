import { MainScene } from '../scenes/MainScene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'game',
  scene: MainScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 300 },
      debug: true
    }
  }
};