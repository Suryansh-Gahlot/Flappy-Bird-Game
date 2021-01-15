import BaseScene from './BaseScene';

class ScoreScene extends BaseScene {
    constructor(config) {
        super('ScoreScene', { ...config, canGoBack: true });
    }

    create() {
        super.create();
        const bestScoreText = this.getBestScore();
        this.add.text(...this.screenCenter, `Best Score: ${bestScoreText || 0}`, this.fontOptions).setOrigin(0.5);
    }

    getBestScore() {
        const Best = localStorage.getItem('bestScore');
        return Best;
    }
}


export default ScoreScene;