import Coke from "./coke.js";
import EffectManager from "./EffectManager.js";
import Hasj from "./hasj.js";
import SceneManager from "./sceneManager.js";
import Stats from "./stats.js";
import Player from "./player.js";

const mySceneManager = new SceneManager(1, 0);
const myStats = new Stats();
const player = new Player(800, 100);

function makeRandomItem() {
    const newHasj = new Coke(0, 0);
    newHasj.positionY = Math.random() * (500 - newHasj.height)
    const newHasj2 = new Hasj(0, 0);
    newHasj2.positionY = Math.random() * (500 - newHasj2.height)

    mySceneManager.enqueue(newHasj);
    mySceneManager.enqueue(newHasj2);
}

let spawnrateCount = 0;
function update() { // TODO: better update function (Vsync & deltaTime)
    spawnrateCount++;
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