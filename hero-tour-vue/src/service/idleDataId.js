const _initHeroesUnuseId = (data) => {
  let unusedId = -1
  data.forEach(hero => {
    if (hero.id > unusedId) {
      unusedId = hero.id
    }
  })
  return unusedId
}

let unusedHeroId = -1
let unusedCrisisId = -1
let unusedMessageId = -1

export const initService = (heroes, crisisLibary, messages) => {
  unusedHeroId = _initHeroesUnuseId(heroes)
  unusedCrisisId = _initHeroesUnuseId(crisisLibary)
  unusedMessageId = _initHeroesUnuseId(messages)
}
export const getUnusedHeroId = () => {
  return unusedHeroId++
}

export const getUnusedCrisisId = () => {
  return unusedCrisisId++
}

export const getUnusedMessageId = () => {
  return unusedMessageId++
}
