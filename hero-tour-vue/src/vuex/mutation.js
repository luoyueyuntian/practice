import { LOGIN, LOGOUT, ADD_HERO, DELETE_HERO, MODIFY_HERO } from './constant'
import { login, logout } from './mutation/login'
import { addHero, deleteHero, modifyHero } from './mutation/heroes'
export default {
  [LOGIN]: login,
  [LOGOUT]: logout,
  [ADD_HERO]: addHero,
  [DELETE_HERO]: deleteHero,
  [MODIFY_HERO]: modifyHero
}
