import { getUnusedCrisisId } from '../../service/idleDataId'

export const addCrisis = (state, extraParam) => {
  state.crisisLibary.push({
    name: extraParam.name,
    id: getUnusedCrisisId()
  })
}

export const deleteCrisis = (state, extraParam) => {
  let pos = -1
  state.crisisLibary.forEach((crisis, index) => {
    if (crisis.id === extraParam.id) {
      pos = index
    }
  })
  state.crisisLibary.splice(pos, 1)
}

export const modifyCrisis = (state, extraParam) => {
  let pos = -1
  state.crisisLibary.forEach((crisis, index) => {
    if (crisis.id === extraParam.id) {
      pos = index
    }
  })
  state.crisisLibary.splice(pos, 1, {
    name: extraParam.newName,
    id: extraParam.id
  })
}
