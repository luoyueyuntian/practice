import { SEND_MESSAGE, SWITCH_VISIBLE, SHOW_CONTACT, HIDE_CONTACT, UPDATE_NEXT_MESSAGE_ID } from './actionTypes';

export const sendMessage = (id, msg, author, address) => {
    return {
        type: SEND_MESSAGE,
        id,
        msg,
        author,
        address
    }
};

export const showContactPanel = () => {
    return {
        type: SHOW_CONTACT
    }
};

export const hideContactPanel = () => {
    return {
        type: HIDE_CONTACT
    }
};

export const updateNextMessageId = () => {
    return {
        type: UPDATE_NEXT_MESSAGE_ID
    };
};