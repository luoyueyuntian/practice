import { ADD_HERO, DELETE_HERO, UPDATE_HERO, SELECT_HERO, UN_SELECT_HERO } from './actionTypes';

export const addHero = (newHeroName) => {
  return {
    type: ADD_HERO,
    newHeroName: newHeroName
  };
};

export const deleteHero = (heroId) => {
  return {
    type: DELETE_HERO,
    heroId: heroId
  };
};

export const updateHero = (heroId, heroNewName) => {
  return {
    type: UPDATE_HERO,
    heroId: heroId,
    heroNewName: heroNewName
  };
};

export const selectHero = (heroId) => {
  return {
    type: SELECT_HERO,
    heroId: heroId
  };
};

export const unSelectHero = () => {
  return {
    type: UN_SELECT_HERO
  };
};