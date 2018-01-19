import React, { Component } from 'react';

export default class AddHeroItem extends Component {
    render() {
        return (
            <li className="add-hero-container">
	            <span className="add-btn" >Add</span>
	            <input type="text" />
	        </li>
        )
    }
}