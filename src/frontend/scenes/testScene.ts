import { COLORS } from './../globals';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: true,
    visible: true,
    key: 'Intro',
};

class TestScene extends Phaser.Scene {

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('bg', './images/bg.png');
    }

    public create() {
        this.add.image(0, 0, 'bg').setOrigin(0);
        let button: Phaser.GameObjects.Rectangle;
        button = this.add.rectangle(0, 0, 10, 10, COLORS.BLUE).setOrigin(0, 0);
    }

    public update() {

    }
}

export = TestScene;