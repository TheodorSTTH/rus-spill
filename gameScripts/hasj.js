import Drug from "./drug.js";
import EffectManager from "./EffectManager.js";

export default class Hasj {
    #Hasj;
    speedX = 2;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Hasj = new Drug(positionX, positionY, "green");
    }
    applyEffect(stats, sceneManager) {
        EffectManager.addFilter("hue-rotate(90deg) invert() opacity(.5)")
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 3;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        EffectManager.removeFilter("hue-rotate(90deg) invert() opacity(.5)");
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 3;
        console.log("Effect finished")
    }
    deleteElement() {
        this.#Hasj.deleteElement();
    }
    get positionX() {
        return this.#Hasj.positionX;
    }
    set positionX(x) {
        this.#Hasj.positionX = x;
    }
    get positionY() {
        return this.#Hasj.positionY;
    }
    set positionY(y) {
        this.#Hasj.positionY = y;
    }
    get width() {
        return this.#Hasj.width;
    }
    get height() {
        return this.#Hasj.height;
    }
}