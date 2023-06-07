export default class Speed {
    #Speed;
    effectLength = 6 * 2;
    speedX = 2.5;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Speed = new Drug(positionX, positionY, "./images/Ikoner/speed.png");
    }
    applyEffect(stats, sceneManager) {
        EffectManager.addFilter("saturate(1) contrast(300%) brightness(2)")
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 2;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        EffectManager.removeFilter("saturate(1) contrast(300%) brightness(2)");
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 2.5;
    }
    deleteElement() {
        this.#Speed.deleteElement();
    }
    get positionX() {
        return this.#Speed.positionX;
    }
    set positionX(x) {
        this.#Speed.positionX = x;
    }
    get positionY() {
        return this.#Speed.positionY;
    }
    set positionY(y) {
        this.#Speed.positionY = y;
    }
    get width() {
        return this.#Speed.width;
    }
    get height() {
        return this.#Speed.height;
    }
}