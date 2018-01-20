import React, { Component } from 'react';

export default class AddHeroItem extends Component {
    constructor() {
        super();
        this.createHero = this.createHero.bind(this);
    }
    createHero() {
        const { addHero, nextHeroId, updateNextHeroId } = this.props;
        addHero(this.newHeroInput.value, nextHeroId);
        updateNextHeroId();
    }
    render() {
        return (
            <li className="add-hero-container">
	            <span className="add-btn" onClick={this.createHero}>Add</span>
	            <input type="text" ref={(input) => this.newHeroInput = input} />
	        </li>
        )
    }
}