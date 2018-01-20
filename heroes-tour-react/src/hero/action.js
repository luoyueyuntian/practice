import { ADD_HERO, DELETE_HERO, UPDATE_HERO, SELECT_HERO, UN_SELECT_HERO, FILTER_HEROES, UPDATE_NEXT_HERO_ID } from './actionTypes';

export const addHero = (newHeroName, id) => {
    return {
        type: ADD_HERO,
        newHeroName: newHeroName,
        id: id
    };
};

export const deleteHero = (heroId) => {
    return {
        type: DELETE_HERO,
        heroId: heroId
    };
};

export const updateHero = (heroId, heroNewName) => {
    return {
        type: UPDATE_HERO,
        heroId: heroId,
        heroNewName: heroNewName
    };
};

export const selectHero = (heroId) => {
    return {
        type: SELECT_HERO,
        heroId: heroId
    };
};

export const unSelectHero = () => {
    return {
        type: UN_SELECT_HERO
    };
};

export const filterHeroes = (filterValue) => {
    return {
        type: FILTER_HEROES,
        filterValue
    }
};

export const updateNextHeroId = () => {
    return {
        type: UPDATE_NEXT_HERO_ID
    };
};