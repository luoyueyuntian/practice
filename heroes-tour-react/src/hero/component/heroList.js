import React, { Component } from 'react';
import HeroItem from './heroItem';

export default class HeroList extends Component {
    render() {
        const { heroes, addHero, deleteHero } = this.props;
        return (
            <ul className="list">
        	{heroes.map(hero => <HeroItem key={hero.id} hero={hero}/>)}
        	</ul>
        );
    }
}