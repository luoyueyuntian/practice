import { ADD_CRISIS, DELETE_CRISIS, UPDATE_CRISIS } from './actionTypes';

export const addCrisis = (newHeroName) => {
  return {
    type: ADD_CRISIS,
    newHeroName: newHeroName
  }
}

export const deleteCrisis = (heroId) => {
  return {
    type: DELETE_CRISIS,
    heroId: heroId
  }
}

export const updateCrisis = (heroId, heroNewName) => {
  return {
    type: UPDATE_CRISIS,
    heroId: heroId,
    heroNewName: heroNewName
  }
}