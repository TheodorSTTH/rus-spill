export default class EffectManager {
    static currentEffects = []; // list over activation function for effects
    static #filters = {}; // map over all current effects on body element
    static addFilter(filter) { // adds a filter to the #filters map and
        if (!EffectManager.#filters[filter]) EffectManager.#filters[filter] = 0;
        EffectManager.#filters[filter] += 1;
    }
    static removeFilter(filter) {
        EffectManager.#filters[filter] -= 1; // using int to manage filters to ensure we can have muliple instances of the same filter at once
    }
    get filterLength() {
        return Object.keys(EffectManager.#filters).length;
    }
    static applyFilters() {
        let newFilters = "";
        Object.keys(EffectManager.#filters).forEach(key => {
            if (EffectManager.#filters[key]) newFilters += key + " "; // make sure we have a active filter, and then add
        })
        document.body.style.filter = newFilters;
    }
    static activateEffect(addEffect, removeEffect, duration) { // duration in milliseconds
        addEffect();
        EffectManager.applyFilters(); // apply filter changes made in the addEffect function
        EffectManager.currentEffects.push(addEffect);
        const clonedRemoveEffect = removeEffect.bind({}); // ? think i have to do this to avoid memmory leak
        setTimeout(() => {
            clonedRemoveEffect()
            const effectToBeRemovedIndex = EffectManager.currentEffects.indexOf(addEffect);
            EffectManager.currentEffects.splice(effectToBeRemovedIndex, 1); // remove effect from array
            EffectManager.applyFilters(); // apply filter changes made in the removeEffect function
        }, duration)
    }
}