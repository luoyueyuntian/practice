import { LOGIN, LOGOUT, ADD_HERO, DELETE_HERO, MODIFY_HERO, ADD_CRISIS, DELETE_CRISIS, MODIFY_CRISIS, SEND_MESSAGE, SHOW_CONTACT_PANEL, HIDE_CONTACT_PANEL } from './constant'
import { login, logout } from './mutation/login'
import { addHero, deleteHero, modifyHero } from './mutation/heroes'
import { addCrisis, deleteCrisis, modifyCrisis } from './mutation/crisisLibary'
import { sendMessage } from './mutation/message'
import { showContactOPanel, hideContactPanel } from './mutation/contactPanel'

export default {
  [LOGIN]: login,
  [LOGOUT]: logout,
  [ADD_HERO]: addHero,
  [DELETE_HERO]: deleteHero,
  [MODIFY_HERO]: modifyHero,
  [ADD_CRISIS]: addCrisis,
  [DELETE_CRISIS]: deleteCrisis,
  [MODIFY_CRISIS]: modifyCrisis,
  [SEND_MESSAGE]: sendMessage,
  [SHOW_CONTACT_PANEL]: showContactOPanel,
  [HIDE_CONTACT_PANEL]: hideContactPanel
}
