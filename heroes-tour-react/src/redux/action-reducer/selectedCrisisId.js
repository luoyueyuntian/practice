const SELECT_CRISIS = 'selectCrisis';
const UNSELECT_CRISIS = 'unselectCrisis';

export const selectCrisis = (heroId) => {
    return {
        type: SELECT_CRISIS,
        selectedCrisisId: heroId
    };
};

export const unselectCrisis = () => {
    return {
        type: UNSELECT_CRISIS
    };
};

export const selectedCrisisIdReducer = (state = -1, action) => {
    switch (action.type) {
        case SELECT_CRISIS:
            return action.selectedCrisisId;
        case UNSELECT_CRISIS:
            return -1;
        default:
            return state;
    };
};