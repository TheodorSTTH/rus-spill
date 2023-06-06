export default class SceneManager { // * Manages everything that happens in the scene at a high level
    #items = [];    // queue array over items in scene
    gameSpeedX;     // how much every item moves on the x-axis each step
    gameSpeedY;     // how much every item moves on the y-axis each step
    constructor(initialGameSpeedX, initialGameSpeedY) {
        this.gameSpeedX = initialGameSpeedX;
        this.gameSpeedY = initialGameSpeedY;
    }
    step() {        // one step in the game (kinda like what happens each frame)
        this.#items.forEach(item => {
            item.positionX += this.gameSpeedX * item.speedX;
            item.positionY += this.gameSpeedY * item.speedX;
            if (item.positionX >= 1030) item.deleteElement();
        })
    }
    #isBetween(value, min, max) { // is *value* between *min* and *max*
        return value >= min && value <= max;
    }
    #isColliding(positionX1, positionY1, width1, height1, positionX2, positionY2, width2, height2) { // are items overlapping or touching
        if (this.#isBetween(positionX1, positionX2, positionX2 + width2) && this.#isBetween(positionY1, positionY2, positionY2 + height2)) return true;
        if (this.#isBetween(positionX2, positionX1, positionX1 + width1) && this.#isBetween(positionY2, positionY1, positionY1 + height1)) return true;
        return false
    }
    getCollidingItem(positionX, positionY, width, height) { // get the first item that is colliding with item given
        for (let i = 0; i < this.#items.length; i++) {
            const currentItem = this.#items[i];
            if (this.#isColliding(positionX, positionY, width, height, currentItem.positionX, currentItem.positionY, currentItem.width, currentItem.height)) {
                return currentItem;
            }
        }
        return false;
    }
    enqueue(item) { // add item to scene
        this.#items.push(item)
    }
    dequeue() { // remove item from scene
        this.#items[0].deleteElement();
        delete this.#items[0];
        return this.#items.shift();
    }
    removeSpecificItem(toBeDeletedItem) { // remove specific item from scene
        const toBeDeletedItemIndex = this.#items.indexOf(toBeDeletedItem);
        this.#items[toBeDeletedItemIndex].deleteElement();
        delete this.#items[toBeDeletedItemIndex];
        return this.#items.splice(toBeDeletedItemIndex, 1);
    }
}