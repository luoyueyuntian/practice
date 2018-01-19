import { editHero, setCurHero } from './hero/reducer';
import crisisReducer from './crisis/reducer';
import loginReducer from './login/reducer';
import { sendMsg, changeContactVisible } from './compose/reducer';

export default {
    heroes: editHero,
    crisisLibary: crisisReducer,
    isLogin: loginReducer,
    curHeroId: setCurHero,
    msgs: sendMsg,
    showContact: changeContactVisible
};