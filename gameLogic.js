import Drug from "./drug.js";

const myDrug = new Drug(100, 100, "");

let gameSpeed = 2;

function update() {
    // Your update logic goes here
    myDrug.positionX += 1 * gameSpeed;
}

const frameRate = 60; // Set the desired frame rate
const frameDelay = 1000 / frameRate; // the update function will be called every frameDelay milliseconds

// Start the update loop using setInterval
setInterval(update, frameDelay);