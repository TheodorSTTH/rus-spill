import Hasj from "./hasj.js";
import SceneManager from "./sceneManager.js";

const mySceneManager = new SceneManager(2, 0); // TODO: increase as game speed x as game goes on


const myHasj1 = new Hasj(0, 0);
const myHasj2 = new Hasj(40, 100);

mySceneManager.enqueue(myHasj1);
mySceneManager.enqueue(myHasj2);



// TODO: Add a real player instanse
const playerPositionX = 800;
const playerPositionY = 100;
const playerWidth = 50;
const playerHight = 100;



function update() { // TODO: Time.
    mySceneManager.move();
    // ! NICO om du plotter inn spiller data under så burde kollisjoner med drugs fungere
    const collidingItem = mySceneManager.getCollidingItem(playerPositionX, playerPositionY, playerWidth, playerHight);
    if (collidingItem) {
        collidingItem.applyEffect(mySceneManager); // ? Maybe have somthing like filterManager.applyEffect(collidingItem)
        mySceneManager.removeSpecificItem(collidingItem);
    }
}

const frameRate = 60; // Set the desired frame rate
const frameDelay = 1000 / frameRate; // the update function will be called every frameDelay milliseconds

// Start the update loop using setInterval
setInterval(update, frameDelay);