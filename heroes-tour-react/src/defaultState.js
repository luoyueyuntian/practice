export default {
    heroes: [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ],
    crisisLibary: [{
        id: 1,
        name: 'Dragon Burning Cities'
    }, {
        id: 2,
        name: 'Sky Rains Great White Sharks'
    }, {
        id: 3,
        name: 'Giant Asteroid Heading For Earth'
    }, {
        id: 4,
        name: 'Procrastinators Meeting Delayed Again'
    }],
    msgs: [],
    isLogin: false,
    curHeroId: null,
    curCrisisId: null,
    showContact: false,
    filterValue: '',
    nextHeroId: 21,
    nextCrisisId: 5,
    nextMsgIs: 1
}