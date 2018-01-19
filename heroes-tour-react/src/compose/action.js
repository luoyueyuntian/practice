import { SEND_MESSAGE, SWITCH_VISIBLE, SHOW_CONTACT, HIDE_CONTACT } from './actionTypes';

export const sendMessage = (msg, author, address) => {
    return {
        type: SEND_MESSAGE,
        msg,
        author,
        address
    }
};

export const setContactVisible = () => {
    return {
        type: SWITCH_VISIBLE
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