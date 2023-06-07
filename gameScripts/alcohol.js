import Drug from "./drug.js";
import EffectManager from "./EffectManager.js";

export default class Alcohol {
    #Alcohol;
    effectLength = 2 * 2;
    speedX = 1;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Alcohol = new Drug(positionX, positionY, "./images/Ikoner/alcohol.png");
    }
    applyEffect(stats, sceneManager) {
        EffectManager.addFilter("blur(6px)")
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 3;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        EffectManager.removeFilter("blur(6px)");
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 2.5;
    }
    deleteElement() {
        this.#Alcohol.deleteElement();
    }
    get positionX() {
        return this.#Alcohol.positionX;
    }
    set positionX(x) {
        this.#Alcohol.positionX = x;
    }
    get positionY() {
        return this.#Alcohol.positionY;
    }
    set positionY(y) {
        this.#Alcohol.positionY = y;
    }
    get width() {
        return this.#Alcohol.width;
    }
    get height() {
        return this.#Alcohol.height;
    }
}