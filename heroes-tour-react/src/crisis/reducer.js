import { ADD_CRISIS, DELETE_CRISIS, UPDATE_CRISIS } from './actionTypes';

const addCrisis = (state, newHeroName) => {
  return state.concat({
    name: newHeroName,
    id: 33
  })
}

const deleteCrisis = (state, heroId) => {
  return state.filter(hero => hero.id !== heroId);
}

const updateCrisis = (state, heroId, heroNewName) => {
  return state.map(hero => {
    if (hero.id === heroId) {
      return {
        name: heroNewName,
        id: heroId
      };
    }
    return hero;
  })
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CRISIS:
      return addCrisis(state, action.newHeroName);
    case DELETE_CRISIS:
      return deleteCrisis(state, action.heroId);
    case UPDATE_CRISIS:
      return updateCrisis(state, action.heroId, action.heroNewName);
    default:
      return state;
  }
}