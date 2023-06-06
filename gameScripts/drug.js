import Transform from "./Transform.js";

export default class Drug { // TODO: This needs a huge refactor, it creates too much boilerplate
    #transform;
    #drugElement;
    constructor(positionX, positionY, icon, width = 48, height = 48) {
        this.#transform = new Transform(positionX, positionY, width, height)
        this.icon = icon;
        this.#addToDOM();
    }
    #addToDOM() {
        // Create DOM element
        this.#drugElement = document.createElement('div');

        // Apply CSS styling
        this.#drugElement.style.position = "absolute";
        this.#drugElement.style.right = `${this.#transform.positionX}px`;
        this.#drugElement.style.bottom = `${this.#transform.positionY}px`;
        this.#drugElement.style.width = `${this.#transform.width}px`;
        this.#drugElement.style.height = `${this.#transform.height}px`;
        this.#drugElement.style.background = this.icon || "red";

        // Append the div to the player area
        document.getElementById("player-area").appendChild(this.#drugElement);
    }
    deleteElement() { // deletes element from DOM
        this.#drugElement.remove();
    }
    get positionX() {
        return this.#transform.positionX;
    }
    set positionX(x) {
        this.#transform.positionX = x;
        this.#drugElement.style.right = `${x}px`;
    }
    get positionY() {
        return this.#transform.positionY;
    }
    set positionY(y) {
        this.#transform.positionY = y;
        this.#drugElement.style.bottom = `${y}px`;
    }
    get width() {
        return this.#transform.width;
    }
    get height() {
        return this.#transform.height;
    }
}