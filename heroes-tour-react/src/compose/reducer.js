import { SEND_MESSAGE, SWITCH_VISIBLE, SHOW_CONTACT, HIDE_CONTACT } from './actionTypes';

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

export const sendMsg = (state = [], action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return send(state, action.msg, action.author, action.address);
        default:
            return state;
    }
};

export const changeContactVisible = (state = false, action) => {
    switch (action.type) {
        case SHOW_CONTACT:
            return true;
        case HIDE_CONTACT:
            return false;
        default:
            return state;
    }
};