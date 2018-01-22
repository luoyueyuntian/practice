import { unselectHero } from './selectedHeroId';

const ASYNC_ACTION = 'asyncAction';

export const asyncAction = () => {
    return (dispach) => {
        const testPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                dispach(unselectHero());
                resolve(' success');
            }, 1000);
        });
        return testPromise.then((data) => {
            console.log('resolve' + data);
        }, () => {
            console.log('reject');
        });
    }
};

export const asyncReducer = (state = '', action) => {
    switch (action.type) {
        case ASYNC_ACTION:

        default:
            return state;
    }
}