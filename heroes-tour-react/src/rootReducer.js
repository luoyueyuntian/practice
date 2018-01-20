import { editHero, setCurHero, setFilterValue, updateNextHeroId } from './hero/reducer';
import { editCrisisLibary, setCurCrisis, updateNextCrisisId } from './crisis/reducer';
import loginReducer from './login/reducer';
import { sendMsg, changeContactVisible, updateNextMessageId } from './compose/reducer';

export default {
    heroes: editHero,
    crisisLibary: editCrisisLibary,
    isLogin: loginReducer,
    curHeroId: setCurHero,
    curCrisisId: setCurCrisis,
    msgs: sendMsg,
    showContact: changeContactVisible,
    filterValue: setFilterValue,
    nextHeroId: updateNextHeroId,
    nextCrisisId: updateNextCrisisId,
    nextMsgId: updateNextMessageId
};