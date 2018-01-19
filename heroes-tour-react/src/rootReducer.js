import { editHero, setCurHero, setFilterValue } from './hero/reducer';
import { editCrisisLibary, setCurCrisis } from './crisis/reducer';
import loginReducer from './login/reducer';
import { sendMsg, changeContactVisible } from './compose/reducer';

export default {
    heroes: editHero,
    crisisLibary: editCrisisLibary,
    isLogin: loginReducer,
    curHeroId: setCurHero,
    curCrisisId: setCurCrisis,
    msgs: sendMsg,
    showContact: changeContactVisible,
    filterValue: setFilterValue
};