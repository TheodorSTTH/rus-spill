import Drug from "./drug.js";
import EffectManager from "./EffectManager.js";

export default class Fleinsopp {
    #Fleinsopp;
    effectLength = 4 * 2;
    speedX = 1.7;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Fleinsopp = new Drug(positionX, positionY, "./images/Ikoner/sopp.png");
    }
    applyEffect(stats, sceneManager) {
        EffectManager.addFilter("hue-rotate(90deg) brightness(0.4) invert() saturate(1)")
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 1.4;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        EffectManager.removeFilter("hue-rotate(90deg) brightness(0.4) invert() saturate(1)");
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 1.8;
    }
    deleteElement() {
        this.#Fleinsopp.deleteElement();
    }
    get positionX() {
        return this.#Fleinsopp.positionX;
    }
    set positionX(x) {
        this.#Fleinsopp.positionX = x;
    }
    get positionY() {
        return this.#Fleinsopp.positionY;
    }
    set positionY(y) {
        this.#Fleinsopp.positionY = y;
    }
    get width() {
        return this.#Fleinsopp.width;
    }
    get height() {
        return this.#Fleinsopp.height;
    }
}