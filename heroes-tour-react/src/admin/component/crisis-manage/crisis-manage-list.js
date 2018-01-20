import React, { Component } from 'react';

import CrisisManageItem from './crisi-manage-item';

export default class CrisisManageList extends Component {
    render() {
        const { crisisLibary, addCrisis, deleteCrisis, selectCrisis } = this.props;
        const crisisItems = crisisLibary.map(crisis => (
            <CrisisManageItem
            key={crisis.id}
            crisis={crisis}
            addCrisis={addCrisis}
            deleteCrisis={deleteCrisis}
            selectCrisis={selectCrisis}
            />
        ));
        return (
            <ul className="hero-list-container">
                {crisisItems}
            </ul>
        );
    }
}