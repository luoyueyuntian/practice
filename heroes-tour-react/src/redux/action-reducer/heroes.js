import { getNextUnusedHeroId } from '../../service';
const ADD_HERO = 'addHero';
const DELETE_HERO = 'deleteHero';
const UPDATE_HERO = 'updateHero';

export const addHero = (newHeroName) => {
    return {
        type: ADD_HERO,
        newHeroName: newHeroName,
        id: getNextUnusedHeroId()
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

const addHeroReducer = (originHeroes, newHeroName, newHeroId) => {
    return originHeroes.concat({
        name: newHeroName,
        id: newHeroId
    });
}

const deleteHeroRecuder = (originHeroes, heroId) => {
    return originHeroes.filter(hero => hero.id !== heroId);
}

const updateHeroReducer = (originHeroes, heroId, heroNewName) => {
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

export const heroesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_HERO:
            return addHeroReducer(state, action.newHeroName, action.id);
        case DELETE_HERO:
            return deleteHeroRecuder(state, action.heroId);
        case UPDATE_HERO:
            return updateHeroReducer(state, action.heroId, action.heroNewName);
        default:
            return state;
    }
};