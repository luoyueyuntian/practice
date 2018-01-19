import * as heroAction from './hero/action';
import * as crisisAction from './crisis/action';
import * as loginAction from './login/action';
import * as compose from './compose/action';

export default {
  ...heroAction,
  ...crisisAction,
  ...loginAction,
  ...compose
};