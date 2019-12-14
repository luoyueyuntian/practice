import { combineReducers } from 'redux';

import { heroesReducer } from './action-reducer/heroes';
import { crisisLibaryReducer } from './action-reducer/crisisLibary';
import { loginReducer } from './action-reducer/isLogin';
import { displayContactPanelReducer } from './action-reducer/displayContactPanel';
import { selectedHeroIdReducer } from './action-reducer/selectedHeroId';
import { selectedCrisisIdReducer } from './action-reducer/selectedCrisisId';
import { messagesReducer } from './action-reducer/messages';
import { logInReducer } from './action-reducer/displayLogIn';


export default combineReducers({
    heroes: heroesReducer,
    crisisLibary: crisisLibaryReducer,
    msgs: messagesReducer,
    isLogin: loginReducer,
    curHeroId: selectedHeroIdReducer,
    curCrisisId: selectedCrisisIdReducer,
    showContact: displayContactPanelReducer,
    displayLogIn: logInReducer
});

export {
    heroesReducer,
    crisisLibaryReducer,
    loginReducer,
    displayContactPanelReducer,
    selectedHeroIdReducer,
    selectedCrisisIdReducer,
    messagesReducer,
    logInReducer
};