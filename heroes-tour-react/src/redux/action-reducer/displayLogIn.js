const SHOW_LOG_IN = 'showLogIn';
const HIDE_LOG_IN = 'hideLogIn';

export const showLogIn = () => {
    return {
        type: SHOW_LOG_IN
    };
};

export const hideLogIn = () => {
    return {
        type: HIDE_LOG_IN
    };
};

export const logInReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_LOG_IN:
            return true;
        case HIDE_LOG_IN:
            return false;
        default:
            return state;
    }
};