import Alcohol from "./alcohol.js";
import Coke from "./coke.js";
import Bear from "./bear.js";
import EffectManager from "./EffectManager.js";
import Fleinsopp from "./fleinsopp.js";
import Hasj from "./hasj.js";
import SceneManager from "./sceneManager.js";
import Stats from "./stats.js";
import Player from "./player.js";
import Utils from "./utils.js";
import Speed from "./speed.js";

const mySceneManager = new SceneManager(2, 0);
const myStats = new Stats();
const player = new Player(800, 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function randomItem() {
    let newItem;
    const randomInt = Utils.getRandomInt(5);
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
        case 5:
            newItem = new Bear(0, 0);
            break;
        case 6:
            newItem = new Speed(0, 0);
            break;
        default:
            newItem = new Alcohol(0, 0);
            break;
    }
    newItem.positionY = Math.random() * (500 - newItem.height)
    return newItem
}

let directionY = -1;
let playerSpeedY = 0;
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space' || event.keyCode === 32) {
        directionY = 0.35;
    };
});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Space' || event.keyCode === 32) {
        directionY = -0.35;
    };
});

function makeRandomItem() {
    const newItem = randomItem();
    mySceneManager.enqueue(newItem);
}

let spawnrateCount = 0;
function update() { // TODO: better update function (Vsync & deltaTime)
    if (myStats.health === 0) Utils.replaceUrl('game.html', 'Endscreen.html');
    spawnrateCount++;
    playerSpeedY += directionY;
    player.positionY += playerSpeedY;

    if (player.positionY <= 0) {
        player.positionY = 0;
        playerSpeedY = 0;
    } else if (player.positionY >= 400) {
        player.positionY = 400;
        playerSpeedY = 0;
    }
    mySceneManager.step();
    // ! NICO om du plotter inn spiller data under så burde kollisjoner med drugs fungere
    const collidingItem = mySceneManager.getCollidingItem(player.positionX, player.positionY, player.width, player.height);
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