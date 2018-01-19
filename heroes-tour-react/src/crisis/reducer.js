import { ADD_CRISIS, DELETE_CRISIS, UPDATE_CRISIS, SELECT_CRISIS, UN_SELECT_CRISIS } from './actionTypes';

const addCrisis = (state, newHeroName) => {
    return state.concat({
        name: newHeroName,
        id: 33
    });
};

const deleteCrisis = (state, heroId) => {
    return state.filter(hero => hero.id !== heroId);
};

const updateCrisis = (state, crisisId, crisisNewName) => {
    return state.map(crisis => {
        if (crisis.id === crisisId) {
            return {
                name: crisisNewName,
                id: crisisId
            };
        }
        return crisis;
    });
};

export const editCrisisLibary = (state = [], action) => {
    switch (action.type) {
        case ADD_CRISIS:
            return addCrisis(state, action.crisisNewName);
        case DELETE_CRISIS:
            return deleteCrisis(state, action.crisisId);
        case UPDATE_CRISIS:
            return updateCrisis(state, action.crisisId, action.crisisNewName);
        default:
            return state;
    }
};

export const setCurCrisis = (state = -1, action) => {
    switch (action.type) {
        case SELECT_CRISIS:
            return action.crisisId;
        case UN_SELECT_CRISIS:
            return -1;
        default:
            return state;
    }
};