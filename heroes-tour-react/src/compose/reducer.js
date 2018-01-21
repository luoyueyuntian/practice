import { SEND_MESSAGE, SHOW_CONTACT, HIDE_CONTACT, UPDATE_NEXT_MESSAGE_ID } from './actionTypes';

const send = (state, id, msg, author, addressee) => {
    return state.concat({
        id: id,
        auth: author,
        message: msg,
        addressee: parseInt(addressee, 10)
    })
}

export const sendMsg = (state = [], action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return send(state, action.id, action.msg, action.author, action.addressee);
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

export const updateNextMessageId = (state = 0, action) => {
    switch (action.type) {
        case UPDATE_NEXT_MESSAGE_ID:
            return state + 1;
        default:
            return state;
    }
};