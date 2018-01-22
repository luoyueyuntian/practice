let unusedId = -1;

const initUnuesdMessageId = (existMessages) => {
    for (let i = 0, ii = existMessages.length; i < ii; i++) {
        if (existMessages[i].id > unusedId) {
            unusedId = existMessages[i].id;
        }
    }
};

const getNextUnusedMessageId = () => {
    unusedId++;
    return unusedId;
};

export { initUnuesdMessageId, getNextUnusedMessageId };