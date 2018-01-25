import { getUnusedHeroId } from '../../service/idleDataId'

export const addHero = (state, option) => {
  state.heroes.push({
    name: option.newHeroName,
    id: getUnusedHeroId()
  })
}

export const deleteHero = (state, option) => {
  let pos = -1
  state.heroes.forEach((hero, index) => {
    if (hero.id === option.id) {
      pos = index
    }
  })
  state.heroes.splice(pos, 1)
}

export const modifyHero = (state, option) => {
  let pos = -1
  state.heroes.forEach((hero, index) => {
    if (hero.id === option.id) {
      pos = index
    }
  })
  state.heroes.splice(pos, 1, {
    name: option.newHeroName,
    id: option.id
  })
}
