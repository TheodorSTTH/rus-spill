export default class Player {
    #positionX;
    #positionY;
    #width;
    #height;
    #playerElement;
    constructor(positionX, positionY, icon, width = 50, height = 100) {
        this.#positionX = positionX;
        this.#positionY = positionY;
        this.icon = "./Images/Ikoner/player.png";
        this.#width = width;
        this.#height = height;
        this.#addToDOM();
    };
    #addToDOM() {
        // Create DOM element
        this.#playerElement = document.createElement('img');

        // Apply CSS styling
        this.#playerElement.style.position = "absolute";
        this.#playerElement.style.bottom = `${this.#positionY}px`;
        this.#playerElement.style.right = `${this.#positionX}px`;
        this.#playerElement.style.width = `${this.#width}px`;
        this.#playerElement.style.height = `${this.#height}px`;
        this.#playerElement.style.background = this.icon || "blue";
        this.#playerElement.src = this.icon;

        // Append the div to the player area
        document.getElementById("player-area").appendChild(this.#playerElement);
    }; 
    get positionX() {
        return this.#positionX;
    };
    set positionX(x) {
        this.#positionX = x;
        this.#playerElement.style.right = `${x}px`;
    };
    get positionY() {
        return this.#positionY;
    };
    set positionY(y) {
        this.#positionY = y;
        this.#playerElement.style.bottom = `${y}px`;
    };
    get width() {
        return this.#width;
    };
    get height() {
        return this.#height;
    };  
};
