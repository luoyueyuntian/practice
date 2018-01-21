import React, { Component } from 'react';

export default class AddCrisisItem extends Component {
    constructor() {
        super();
        this.createCrisis = this.createCrisis.bind(this);
    }
    createCrisis() {
        const { addCrisis, nextCrisisId, updateNextCrisisId } = this.props;
        addCrisis(nextCrisisId, this.newCrisisInput.value);
        updateNextCrisisId();
        this.newCrisisInput.value = '';
    }
    render() {
        return (
            <li className="add-hero-container">
	            <span className="add-btn" onClick={this.createCrisis}>Add</span>
	            <input type="text" ref={(input) => this.newCrisisInput = input} />
	        </li>
        )
    }
}