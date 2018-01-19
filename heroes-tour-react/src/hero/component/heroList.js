import React, { Component } from 'react';
import HeroItem from './heroItem';
import Search from './search';

export default class HeroList extends Component {
    render() {
        const { heroes, addHero, filterValue } = this.props;
        return (
            <div>
	            <ul className="list">
	        		{heroes.map(hero => <HeroItem key={hero.id} hero={hero}/>)}
	        	</ul>
	        	<div className="search-panel">
		        	<Search heroes={heroes} filterValue={filterValue} />
	        	</div>
        	</div>
        );
    }
}