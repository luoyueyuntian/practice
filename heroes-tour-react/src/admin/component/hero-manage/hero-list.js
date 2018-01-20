import React, { Component } from 'react';

import HeroManageItem from './hero-item';
import AddHeroItem from './add-hero';

export default class HeroManageList extends Component {
    render() {
        const { heroes, nextHeroId, addHero, deleteHero, selectHero, updateNextHeroId } = this.props;
        const heroItems = heroes.map(hero => (
            <HeroManageItem 
            key={hero.id} 
            hero={hero} 
            addHero={addHero}
            deleteHero={deleteHero}
            selectHero={selectHero}
            />
        ));
        return (
            <ul className="hero-list-container">
                <AddHeroItem 
                addHero={addHero}
                nextHeroId={nextHeroId}
                updateNextHeroId={updateNextHeroId}
                />
                {heroItems}
            </ul>
        );
    }
}