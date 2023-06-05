export default class Drug {
    #positionX;
    #positionY;
    #width;
    #height;
    #drugElement;
    constructor(positionX, positionY, icon, width = 48, height = 48) {
        this.#positionX = positionX;
        this.#positionY = positionY;
        this.icon = icon;
        this.#width = width;
        this.#height = height;
        this.#addToDOM();
    }
    #addToDOM() {
        // Create DOM element
        this.#drugElement = document.createElement('div');

        // Apply CSS styling
        this.#drugElement.style.position = "absolute";
        this.#drugElement.style.bottom = `${this.#positionY}px`;
        this.#drugElement.style.right = `${this.#positionX}px`;
        this.#drugElement.style.width = `${this.#width}px`;
        this.#drugElement.style.height = `${this.#height}px`;
        this.#drugElement.style.background = this.icon || "red";

        // Append the div to the player area
        document.getElementById("player-area").appendChild(this.#drugElement);
    }
    get positionX() {
        return this.#positionX;
    }
    set positionX(x) {
        this.#positionX = x;
        this.#drugElement.style.right = `${x}px`;
    }
    get positionY() {
        return this.#positionY;
    }
    set positionY(y) {
        this.#positionY = y;
        this.#drugElement.style.bottom = `${y}px`;
    }
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }
}