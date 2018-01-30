import { LOGIN, LOGOUT } from '../constant'
const loginAction = ({ commit }) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(true) }, 1000)
  })
  promise.then((status) => {
    commit(LOGIN)
  })
  return promise
}

const logoutAction = ({ commit }) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
  promise.then(() => {
    commit(LOGOUT)
  })
}
export { loginAction, logoutAction }
