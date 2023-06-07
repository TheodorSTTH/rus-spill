import Alcohol from "./alcohol.js";
import Coke from "./coke.js";
import EffectManager from "./EffectManager.js";
import Fleinsopp from "./fleinsopp.js";
import Hasj from "./hasj.js";
import SceneManager from "./sceneManager.js";
import Stats from "./stats.js";

const mySceneManager = new SceneManager(1, 0);
const myStats = new Stats();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function randomItem() {
    let newItem;
    const randomInt = getRandomInt(4); // 1, 2, 3
    console.log(randomInt)
    switch (randomInt) {
        case 1:
            newItem = new Hasj(0, 0);
            break;
        case 2:
            newItem = new Alcohol(0, 0);
            break;
        case 3:
            newItem = new Coke(0, 0);
            break;
        case 4:
            newItem = new Fleinsopp(0, 0);
            break;
        default:
            newItem = new Alcohol(0, 0);
            break;
    }
    newItem.positionY = Math.random() * (500 - newItem.height)
    return newItem
}
function makeRandomItem() {
    const newItem = randomItem();
    mySceneManager.enqueue(newItem);
}

// TODO: Add a real player instanse
const playerPositionX = 800;
const playerPositionY = 100;
const playerWidth = 50;
const playerHight = 100;


let spawnrateCount = 0;
function update() { // TODO: better update function (Vsync & deltaTime)
    if (myStats.health === 0) {
        // Get the current URL
        var currentUrl = window.location.href;

        // Replace the 'game.html' part with 'Endscreen.html'
        var newUrl = currentUrl.replace('game.html', 'Endscreen.html');

        // Navigate to the new URL
        window.location.href = newUrl;
    }
    spawnrateCount++;
    mySceneManager.step();
    // ! NICO om du plotter inn spiller data under så burde kollisjoner med drugs fungere
    const collidingItem = mySceneManager.getCollidingItem(playerPositionX, playerPositionY, playerWidth, playerHight);
    if (collidingItem) {
        EffectManager.activateEffect(() => collidingItem.applyEffect(myStats, mySceneManager), () => collidingItem.removeEffect(myStats, mySceneManager), collidingItem.effectLength * 1000);
        mySceneManager.removeSpecificItem(collidingItem);
    }
    if (spawnrateCount === 120) { // make item every 2 seconds 
        makeRandomItem();
        spawnrateCount = 0;
    }

}

const frameRate = 60; // Set the desired frame rate
const frameDelay = 1000 / frameRate; // the update function will be called every frameDelay milliseconds

// Start the update loop using setInterval
setInterval(update, frameDelay);