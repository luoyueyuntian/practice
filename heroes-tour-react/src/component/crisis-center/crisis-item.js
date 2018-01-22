import React, { Component } from 'react';

export default class CrisisItem extends Component {
    render() {
        const { id, name } = this.props.crisis;
        return (
            <li>
        	<span className="badge">{id}</span>
        	{name}
        	</li>
        );
    }
}