import Hasj from "./hasj.js";
import SceneManager from "./sceneManager.js";

let gameSpeed = 2;
const mySceneManager = new SceneManager(gameSpeed);

const myHasj1 = new Hasj(0, 0);
const myHasj2 = new Hasj(40, 100);

mySceneManager.addItem(myHasj1);
mySceneManager.addItem(myHasj2);



// TODO: Add a real player instanse
const playerPositionX = 800;
const playerPositionY = 100;
const playerWidth = 50;
const playerHight = 100;



function update() { // one game step
    mySceneManager.move();
    if (mySceneManager.getCollidingElement(playerPositionX, playerPositionY, playerWidth, playerHight)) alert("COLLISION");
}

const frameRate = 60; // Set the desired frame rate
const frameDelay = 1000 / frameRate; // the update function will be called every frameDelay milliseconds

// Start the update loop using setInterval
setInterval(update, frameDelay);