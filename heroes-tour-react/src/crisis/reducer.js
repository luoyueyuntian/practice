import { ADD_CRISIS, DELETE_CRISIS, UPDATE_CRISIS, SELECT_CRISIS, UN_SELECT_CRISIS, UPDATE_NEXT_CRISIS_ID } from './actionTypes';

const addCrisis = (state, id, newHeroName) => {
    return state.concat({
        name: newHeroName,
        id: id
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
            return addCrisis(state, action.id, action.newHeroName);
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

export const updateNextCrisisId = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_NEXT_CRISIS_ID:
            return state + 1;
        default:
            return state;
    }
};