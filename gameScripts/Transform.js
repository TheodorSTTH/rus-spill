export default class Transform {
    positionX = 0;
    positionY = 0;
    width;
    height;
    constructor(positionX, positionY, width, height) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
}