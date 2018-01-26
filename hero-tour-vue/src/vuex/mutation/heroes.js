import { getUnusedHeroId } from '../../service/idleDataId'

export const addHero = (state, extraParam) => {
  state.heroes.push({
    name: extraParam.name,
    id: getUnusedHeroId()
  })
}

export const deleteHero = (state, extraParam) => {
  let pos = -1
  state.heroes.forEach((hero, index) => {
    if (hero.id === extraParam.id) {
      pos = index
    }
  })
  state.heroes.splice(pos, 1)
}

export const modifyHero = (state, extraParam) => {
  let pos = -1
  state.heroes.forEach((hero, index) => {
    if (hero.id === extraParam.id) {
      pos = index
    }
  })
  state.heroes.splice(pos, 1, {
    name: extraParam.newName,
    id: extraParam.id
  })
}
