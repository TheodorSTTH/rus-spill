import Drug from "./drug.js";

export default class Hasj {
    #Hasj;
    speedX = 2;
    speedY = 0;
    constructor(positionX, positionY) {
        this.#Hasj = new Drug(positionX, positionY, "green");
    }
    applyEffect() {
        console.log("+ Filter")
        document.body.style.filter = "hue-rotate(90deg) invert() opacity(.5)";

        console.log("- Liv")
    }
    removeEffect() {
        document.body.style.filter = "";
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