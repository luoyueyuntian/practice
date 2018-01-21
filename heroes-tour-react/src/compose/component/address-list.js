import React, { Component } from 'react';


export default class AddressList extends Component {
    componentDidMount() {
        this.props.uploadAdress(this.adddressSelect);
    }
    render() {
        const { heroes } = this.props;
        const items = heroes.map(hero => (
            <option key={hero.id} value={hero.id}>
    			{hero.name}
          	</option>
        ));
        return (
            <select className="hero-list" default="0" ref={(input)=>this.adddressSelect=input}>
		        <option key="0" value="0">All</option>
		        {items}
	        </select>
        );
    }
}