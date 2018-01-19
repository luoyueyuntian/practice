import { SEND_MESSAGE } from './actionTypes';

export const sendMessage = (msg, author, address) => {
  return {
    type: SEND_MESSAGE,
    msg,
    author,
    address
  }
}