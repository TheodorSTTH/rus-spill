export default class SceneManager {
    #items = [];
    gameSpeed;
    constructor(initialGameSpeed) {
        this.gameSpeed = initialGameSpeed;
    }
    move() {
        this.#items.forEach(item => {
            item.positionX += this.gameSpeed * item.speed;
            if (item.positionX >= 1030) item.deleteElement();
        })
    }
    #isBetween(value, min, max) {
        return value >= min && value <= max;
    }
    #isColliding(positionX1, positionY1, width1, height1, positionX2, positionY2, width2, height2) {
        if (this.#isBetween(positionX1, positionX2, positionX2 + width2) && this.#isBetween(positionY1, positionY2, positionY2 + height2)) return true;
        if (this.#isBetween(positionX2, positionX1, positionX1 + width1) && this.#isBetween(positionY2, positionY1, positionY1 + height1)) return true;
        return false
    }
    getCollidingElement(positionX, positionY, width, height) {
        for (let i = 0; i < this.#items.length; i++) {
            const currentItem = this.#items[i];
            if (this.#isColliding(positionX, positionY, width, height, currentItem.positionX, currentItem.positionY, currentItem.width, currentItem.height)) {
                return currentItem;
            }
        }
        return false;
    }
    addItem(item) {
        this.#items.push(item)
    }
    removeItem(item) {
        delete this.#items[0];
        return this.#items.shift();
    }
}