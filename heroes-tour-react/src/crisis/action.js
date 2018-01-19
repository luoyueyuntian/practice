import { ADD_CRISIS, DELETE_CRISIS, UPDATE_CRISIS, SELECT_CRISIS, UN_SELECT_CRISIS } from './actionTypes';

export const addCrisis = (newHeroName) => {
    return {
        type: ADD_CRISIS,
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

export const selectCrisis = (crisisId) => {
    return {
        type: SELECT_CRISIS,
        crisisId
    }
};

export const unSelectCrisis = () => {
    return {
        type: UN_SELECT_CRISIS
    }
};