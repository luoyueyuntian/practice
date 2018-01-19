import { editHero, setCurHero } from './hero/reducer';
import crisisReducer from './crisis/reducer';
import loginReducer from './login/reducer';
import msgReducer from './compose/reducer';

export default {
  heroes: editHero,
  crisisLibary: crisisReducer,
  isLogin: loginReducer,
  curHeroId: setCurHero,
  msgs: msgReducer
};