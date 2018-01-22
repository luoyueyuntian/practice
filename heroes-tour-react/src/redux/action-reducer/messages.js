import { getNextUnusedMessageId } from '../../service';

const ADD_MESSAGE = 'addMessage';

export const addMessage = (message, author, addressee) => {
    return {
        type: ADD_MESSAGE,
        message: message,
        author: author,
        addressee: addressee
    };
};

const addMessageReduce = (state, msg, author, addressee) => {
    return state.concat({
        id: getNextUnusedMessageId(),
        auth: author,
        message: msg,
        addressee: parseInt(addressee, 10)
    });
};

export const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessageReduce(state, action.message, action.author, action.addressee);
        default:
            return state;
    }
};