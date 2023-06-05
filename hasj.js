import Drug from "./drug.js";

export default class Hasj {
    #Hasj;
    constructor(positionX, positionY) {
        this.#Hasj = new Drug(positionX, positionY, "green");
    }
    applyEffect() {
        console.log("+ Filter")
        console.log("- Liv")
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