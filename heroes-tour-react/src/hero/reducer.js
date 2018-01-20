import { ADD_HERO, DELETE_HERO, UPDATE_HERO, SELECT_HERO, UN_SELECT_HERO, FILTER_HEROES, UPDATE_NEXT_HERO_ID } from './actionTypes';

const addHero = (originHeroes, newHeroName, newHeroId) => {
    return originHeroes.concat({
        name: newHeroName,
        id: newHeroId
    });
}

const deleteHero = (originHeroes, heroId) => {
    return originHeroes.filter(hero => hero.id !== heroId);
}

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

const selectHero = (heroId) => heroId;

const unSelectHero = () => null;

export const editHero = (state = [], action) => {
    switch (action.type) {
        case ADD_HERO:
            return addHero(state, action.newHeroName, action.id);
        case DELETE_HERO:
            return deleteHero(state, action.heroId);
        case UPDATE_HERO:
            return updateHero(state, action.heroId, action.heroNewName);
        default:
            return state;
    }
};

export const setCurHero = (state = null, action) => {
    switch (action.type) {
        case SELECT_HERO:
            return selectHero(state, action.heroId);
        case UN_SELECT_HERO:
            return unSelectHero();
        default:
            return state;
    }
};

export const setFilterValue = (state = '', action) => {
    switch (action.type) {
        case FILTER_HEROES:
            return action.filterValue;
        default:
            return state;
    }
};

export const updateNextHeroId = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_NEXT_HERO_ID:
            return state + 1;
        default:
            return state;
    }
};