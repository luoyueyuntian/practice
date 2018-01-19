import React, { Component } from 'react';

import HeroManageItem from './hero-item';
import AddHeroItem from './add-hero';

export default class HeroManageList extends Component {
    render() {
        const { heroes } = this.props;
        const heroItems = heroes.map(hero => (
            <HeroManageItem key={hero.id} hero={hero} />
        ));
        return (
            <ul className="hero-list-container">
				<AddHeroItem />
				{heroItems}
			</ul>
        );
    }
}