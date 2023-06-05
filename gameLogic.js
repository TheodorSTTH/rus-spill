import Hasj from "./hasj.js";

const myHasj = new Hasj(0, 200);
let gameSpeed = 2;

function update() { // one game step
    myHasj.positionX += 1 * gameSpeed;
    // myHasj.applyEffect();
}

const frameRate = 60; // Set the desired frame rate
const frameDelay = 1000 / frameRate; // the update function will be called every frameDelay milliseconds

// Start the update loop using setInterval
setInterval(update, frameDelay);