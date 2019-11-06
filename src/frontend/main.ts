import * as Phaser from 'phaser';
import * as GLOBALS from './globals';
import TestScene = require('./scenes/testScene');

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Test',

    scene: TestScene,
    type: Phaser.AUTO,

    width: GLOBALS.WIDTH,
    height: GLOBALS.HEIGHT,

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    parent: 'content',
    backgroundColor: GLOBALS.COLORS.BLACK,
};

export const game = new Phaser.Game(gameConfig);

