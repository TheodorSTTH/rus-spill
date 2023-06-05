export default class drug {
    #positionX;
    #positionY;
    #width;
    #height;
    constructor(positionX, positionY, icon, width = 48, height = 48) {
        this.#positionX = positionX;
        this.#positionY = positionY;
        this.icon = icon;
        this.#width = width;
        this.#height = height;
    }
    addToDOM() {
        // Add to DOM logic here
    }

    get positionX() {
        return this.#positionX;
    }
    set positionX(x) {
        this.#positionX = x;
    }
    get positionY() {
        return this.#positionY;
    }
    set positionY(y) {
        this.#positionY = y;
    }
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }
}