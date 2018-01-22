import { getNextUnusedCrisisId } from '../../service';

const ADD_CRISIS = 'addCrisis';
const DELETE_CRISIS = 'deleteCrisis';
const UPDATE_CRISIS = 'updateCrisis';

export const addCrisis = (newCrisisId, newHeroName) => {
    return {
        type: ADD_CRISIS,
        id: newCrisisId,
        newHeroName: newHeroName
    }
};

export const deleteCrisis = (crisisId) => {
    return {
        type: DELETE_CRISIS,
        crisisId: crisisId
    }
};

export const updateCrisis = (crisisId, crisisNewName) => {
    return {
        type: UPDATE_CRISIS,
        crisisId: crisisId,
        crisisNewName: crisisNewName
    }
};

const addCrisisReduce = (state, newHeroName) => {
    return state.concat({
        name: newHeroName,
        id: getNextUnusedCrisisId()
    });
};

const deleteCrisisReduce = (state, heroId) => {
    return state.filter(hero => hero.id !== heroId);
};

const updateCrisisReduce = (state, crisisId, crisisNewName) => {
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

export const crisisLibaryReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CRISIS:
            return addCrisisReduce(state, action.id, action.newHeroName);
        case DELETE_CRISIS:
            return deleteCrisisReduce(state, action.crisisId);
        case UPDATE_CRISIS:
            return updateCrisisReduce(state, action.crisisId, action.crisisNewName);
        default:
            return state;
    }
};