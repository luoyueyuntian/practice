import { showLogIn, hideLogIn } from './displayLogIn';

const LOGIN = 'login';
const LOGOUT = 'logout';

const _login = () => {
    return {
        type: LOGIN
    };
}

export const login = () => {
    return dispatch => {
        dispatch(showLogIn());
        let loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        loginPromise.then(success => {
            dispatch(_login())
            dispatch(hideLogIn());
        })
    };
};

const _logout = () => {
    return {
        type: LOGOUT
    };
};

export const logout = () => {
    return dispatch => {
        let loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 200);
        });
        loginPromise.then(success => {
            dispatch(_logout());
        })
    };
};

export const loginReducer = (state = false, action) => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT:
            return false;
        default:
            return state;
    }
}