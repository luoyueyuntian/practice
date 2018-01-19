import React, { Component } from 'react';

export default class HeroManageItem extends Component {
    render() {
        const { id, name } = this.props.hero;
        return (
            <li>
				<div className="badge">{id}</div>
	            <div className="del-btn">Delete</div>
	            <div className="hero-content">{name}</div>
			</li>
        )
    }
}