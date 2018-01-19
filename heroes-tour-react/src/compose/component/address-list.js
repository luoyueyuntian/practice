import React, { Component } from 'react';


export default class AddressList extends Component {
    render() {
        const { heroes } = this.props;
        const items = heroes.map(hero => (
            <option key={hero.id} value={hero.id}>
    			{hero.name}
          	</option>
        ));
        return (
            <select className="hero-list">
		        <option key="0" value="0">All</option>
		        {items}
	        </select>
        );
    }
}