import React, { Component } from 'react';
import CrisisItem from './crisis-item';

export default class CrisisList extends Component {
    render() {
        const { crisisLibary } = this.props;
        return (
            <ul className="list">
				{crisisLibary.map(crisis => <CrisisItem key={crisis.id} crisis={crisis}/>)}
			</ul>
        );
    }
}