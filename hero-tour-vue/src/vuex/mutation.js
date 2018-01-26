import { LOGIN, LOGOUT, ADD_HERO, DELETE_HERO, MODIFY_HERO, ADD_CRISIS, DELETE_CRISIS, MODIFY_CRISIS } from './constant'
import { login, logout } from './mutation/login'
import { addHero, deleteHero, modifyHero } from './mutation/heroes'
import { addCrisis, deleteCrisis, modifyCrisis } from './mutation/crisisLibary'
export default {
  [LOGIN]: login,
  [LOGOUT]: logout,
  [ADD_HERO]: addHero,
  [DELETE_HERO]: deleteHero,
  [MODIFY_HERO]: modifyHero,
  [ADD_CRISIS]: addCrisis,
  [DELETE_CRISIS]: deleteCrisis,
  [MODIFY_CRISIS]: modifyCrisis
}
