export default class EffectManager {
    static currentEffects = [];
    // TODO: add a list of current filters to manage them better
    static activateEffect(addEffect, removeEffect, duration) { // duration in milliseconds
        addEffect()
        EffectManager.currentEffects.push(addEffect);
        const clonedRemoveEffect = removeEffect.bind({}); // ? think i have to do this to avoid memmory leak
        setTimeout(() => {
            clonedRemoveEffect()
            const effectToBeRemovedIndex = EffectManager.currentEffects.indexOf(addEffect);
            EffectManager.currentEffects.splice(effectToBeRemovedIndex, 1);
        }, duration)
    }
}