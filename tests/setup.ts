import '@testing-library/jest-dom';

// Create a more complete Phaser mock
const mockPhaser = {
  Game: jest.fn(),
  AUTO: 'AUTO',
  Actions: {},
  Animations: {},
  Cache: {},
  Cameras: {
    Scene2D: {}
  },
  Core: {},
  Class: {},
  Data: {},
  Display: {},
  Events: {},
  GameObjects: {},
  Geom: {},
  Input: {},
  Loader: {},
  Math: {
    Vector2: jest.fn()
  },
  Physics: {
    Arcade: {
      Body: jest.fn(),
      Sprite: jest.fn(),
      Group: jest.fn()
    }
  },
  Scale: {},
  Scene: class Scene {
    constructor(config) {
      Object.assign(this, config);
    }
    add = {
      text: jest.fn().mockReturnThis(),
      setOrigin: jest.fn(),
      sprite: jest.fn().mockReturnThis(),
      image: jest.fn().mockReturnThis()
    };
    physics = {
      add: {
        sprite: jest.fn().mockReturnThis()
      }
    };
  },
  Sound: {},
  Time: {},
  Tweens: {},
  Types: {}
};

// Assign the mock to global Phaser object
global.Phaser = mockPhaser as any;