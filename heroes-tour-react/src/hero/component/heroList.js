import React, { Component } from 'react';
import HeroItem from './heroItem';
import Search from './search';

export default class HeroList extends Component {
    render() {
        const { heroes, selectHero, filterValue, filterHeroes, push } = this.props;
        return (
            <div>
	            <ul className="list">
	        		{heroes.map(hero => <HeroItem 
                        key={'hero'+hero.id} 
                        hero={hero} 
                        selectHero={selectHero}
                        push={push}
                        />
                        )}
	        	</ul>
	        	<div className="search-panel">
		        	<Search 
                        heroes={heroes} 
                        filterValue={filterValue}
                        filterHeroes={filterHeroes} 
                    />
	        	</div>
        	</div>
        );
    }
}