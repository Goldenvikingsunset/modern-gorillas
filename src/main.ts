import 'phaser';
import { GameConfig } from './config/GameConfig';

window.addEventListener('load', () => {
  try {
    new Phaser.Game(GameConfig);
  } catch (error) {
    console.error('Failed to initialize game:', error);
  }
});