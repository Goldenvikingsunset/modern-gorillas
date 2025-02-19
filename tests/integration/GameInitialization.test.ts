import 'phaser';
import { GameConfig } from '../../src/config/GameConfig';

describe('Game Initialization', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="game"></div>';
  });

  it('should create game instance', () => {
    new Phaser.Game(GameConfig);
    expect(document.querySelector('#game')).toBeTruthy();
  });
});