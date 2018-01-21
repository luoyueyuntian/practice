import React, { Component } from 'react';

import AddCrisisItem from './add-crisis';
import CrisisManageItem from './crisi-manage-item';

export default class CrisisManageList extends Component {
    render() {
        const { crisisLibary, nextCrisisId, addCrisis, deleteCrisis, selectCrisis, updateNextCrisisId } = this.props;
        const crisisItems = crisisLibary.map(crisis => (
            <CrisisManageItem
            key={crisis.id}
            crisis={crisis}
            deleteCrisis={deleteCrisis}
            selectCrisis={selectCrisis}
            />
        ));
        return (
            <ul className="hero-list-container">
                <AddCrisisItem
                nextCrisisId={nextCrisisId}
                addCrisis={addCrisis}
                updateNextCrisisId={updateNextCrisisId}
                 />
                {crisisItems}
            </ul>
        );
    }
}