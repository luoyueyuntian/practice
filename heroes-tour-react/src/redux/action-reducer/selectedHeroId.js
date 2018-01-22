const SELECT_HERO = 'selectHero';
const UNSELECT_HERO = 'unselectHero';

export const selectHero = (heroId) => {
    return {
        type: SELECT_HERO,
        selectedHeroId: heroId
    };
};

export const unselectHero = () => {
    return {
        type: UNSELECT_HERO
    };
};

export const selectedHeroIdReducer = (state = -1, action) => {
    switch (action.type) {
        case SELECT_HERO:
            return action.selectedHeroId;
        case UNSELECT_HERO:
            return -1;
        default:
            return state;
    };
};