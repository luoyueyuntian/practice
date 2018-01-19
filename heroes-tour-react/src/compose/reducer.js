import { SEND_MESSAGE } from './actionTypes';
import { sendMessage } from './action';

const generateMsgId = () => {
  return Math.floor(Math.random() * 100) + 1;
}

const send = (state, msg, author, address) => {
  return state.concat({
    id: generateMsgId(),
    auth: author,
    message: msg,
    addressee: address
  })
}

export default (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return send(state, action.msg, action.author, action.address);
    default:
      return state;
  }
}