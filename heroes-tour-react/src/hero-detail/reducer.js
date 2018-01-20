import { UPDATE_HERO } from './actionTypes';

const updateHero = (originHeroes, heroId, heroNewName) => {
    return originHeroes.map(hero => {
        if (hero.id === heroId) {
            return {
                name: heroNewName,
                id: heroId
            }
        }
        return hero;
    })
}

export const editHero = (state = [], action) => {
    switch (action.type) {
        case UPDATE_HERO:
            return updateHero(state, action.heroId, action.heroNewName);
        default:
            return state;
    }
};