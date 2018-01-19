import { LOGIN, LOGOUT } from './actionTypes';
import { login, logout } from './action';

export default (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}