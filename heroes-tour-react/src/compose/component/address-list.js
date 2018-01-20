import React, { Component } from 'react';


export default class AddressList extends Component {
    render() {
        const { heroes, cacheAddress } = this.props;
        const items = heroes.map(hero => (
            <option key={hero.id} value={hero.id}>
    			{hero.name}
          	</option>
        ));
        cacheAddress('0');
        return (
            <select className="hero-list" onChange={(e)=>cacheAddress(e.target.value)} default="0">
		        <option key="0" value="0">All</option>
		        {items}
	        </select>
        );
    }
}