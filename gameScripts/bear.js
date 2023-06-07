import Drug from "./drug.js";
import EffectManager from "./EffectManager.js";

export default class Bear {
    #Bear;
    effectLength = 0.2;
    speedX = 2.5;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Bear = new Drug(positionX, positionY, "./images/Ikoner/teddybear.png");
    }
    applyEffect(stats, sceneManager) {
        // EffectManager.addFilter("hue-rotate(90deg) contrast(200%) brightness(300%)")
        stats.health += 1;
    }
    removeEffect(stats, sceneManager) {
        // EffectManager.removeFilter("hue-rotate(90deg) contrast(200%) brightness(300%)");
    }
    deleteElement() {
        this.#Bear.deleteElement();
    }
    get positionX() {
        return this.#Bear.positionX;
    }
    set positionX(x) {
        this.#Bear.positionX = x;
    }
    get positionY() {
        return this.#Bear.positionY;
    }
    set positionY(y) {
        this.#Bear.positionY = y;
    }
    get width() {
        return this.#Bear.width;
    }
    get height() {
        return this.#Bear.height;
    }
}