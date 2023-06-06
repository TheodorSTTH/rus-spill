import Drug from "./drug.js";

export default class Hasj {
    #Hasj;
    speedX = 2;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Hasj = new Drug(positionX, positionY, "green");
    }
    applyEffect(stats, sceneManager) {
        document.body.style.filter = "hue-rotate(90deg) invert() opacity(.5)";
        sceneManager.gameSpeedX = sceneManager.gameSpeedX / 2;
        stats.health -= 1;
    }
    removeEffect(stats, sceneManager) {
        document.body.style.filter = "";
        sceneManager.gameSpeedX = sceneManager.gameSpeedX * 2;
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