let unusedId = -1;

const initUnuesdHeroId = (existHeroes) => {
    for (let i = 0, ii = existHeroes.length; i < ii; i++) {
        if (existHeroes[i].id > unusedId) {
            unusedId = existHeroes[i].id;
        }
    }
};

const getNextUnusedHeroId = () => {
    unusedId++;
    return unusedId;
};

export { initUnuesdHeroId, getNextUnusedHeroId };