export default class Stats {
    #health = 5;
    #maxHealth = 5;
    constructor() {
        document.getElementById("hp").innerText = this.#health;
    }
    get maxHealth() {
        return this.#maxHealth;
    }
    get health() {
        return this.#health;
    }
    set health(newHealth) {
        if (newHealth < this.#maxHealth) {
            this.#health = newHealth;
            document.getElementById("hp").innerText = newHealth;
        }
    }
}