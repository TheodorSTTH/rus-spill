export default class SceneManager { // * Manages everything that happens in the scene at a high level
    #items = []; // TODO: move items to a queue data structure for better performence
    gameSpeedX;
    gameSpeedY;
    constructor(initialGameSpeedX, initialGameSpeedY) {
        this.gameSpeedX = initialGameSpeedX;
        this.gameSpeedY = initialGameSpeedY;
    }
    move() {
        this.#items.forEach(item => {
            item.positionX += this.gameSpeedX * item.speedX;
            item.positionY += this.gameSpeedY * item.speedX;
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
    getCollidingItem(positionX, positionY, width, height) {
        for (let i = 0; i < this.#items.length; i++) {
            const currentItem = this.#items[i];
            if (this.#isColliding(positionX, positionY, width, height, currentItem.positionX, currentItem.positionY, currentItem.width, currentItem.height)) {
                return currentItem;
            }
        }
        return false;
    }
    enqueue(item) {
        this.#items.push(item)
    }
    dequeue() {
        this.#items[0].deleteElement();
        delete this.#items[0];
        return this.#items.shift();
    }
    removeSpecificItem(toBeDeletedItem) {
        const toBeDeletedItemIndex = this.#items.indexOf(toBeDeletedItem);
        this.#items[toBeDeletedItemIndex].deleteElement();
        delete this.#items[toBeDeletedItemIndex];
        return this.#items.splice(toBeDeletedItemIndex, 1);
    }
}