import Drug from "./drug.js";
import EffectManager from "./EffectManager.js";

export default class Coke {
    #Coke;
    effectLength = 0.45 * 2;
    speedX = 2.5;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Coke = new Drug(positionX, positionY, "./images/Ikoner/coke.png");
    }
    applyEffect(stats, sceneManager) {
        EffectManager.addFilter("saturate(1) blur(1px) contrast(300%)")
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 2;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        EffectManager.removeFilter("saturate(1) blur(1px) contrast(300%)");
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 2.5;
    }
    deleteElement() {
        this.#Coke.deleteElement();
    }
    get positionX() {
        return this.#Coke.positionX;
    }
    set positionX(x) {
        this.#Coke.positionX = x;
    }
    get positionY() {
        return this.#Coke.positionY;
    }
    set positionY(y) {
        this.#Coke.positionY = y;
    }
    get width() {
        return this.#Coke.width;
    }
    get height() {
        return this.#Coke.height;
    }
}