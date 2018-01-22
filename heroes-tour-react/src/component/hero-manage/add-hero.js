import React, { Component } from 'react';

export default class AddHeroItem extends Component {
    constructor() {
        super();
        this.createHero = this.createHero.bind(this);
    }
    createHero() {
        this.props.addHero(this.newHeroInput.value);
        this.newHeroInput.value = '';
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