let unusedId = -1;

const initUnuesdCrisisId = (existCrisis) => {
    for (let i = 0, ii = existCrisis.length; i < ii; i++) {
        if (existCrisis[i].id > unusedId) {
            unusedId = existCrisis[i].id;
        }
    }
};

const getNextUnusedCrisisId = () => {
    unusedId++;
    return unusedId;
};

export { initUnuesdCrisisId, getNextUnusedCrisisId };