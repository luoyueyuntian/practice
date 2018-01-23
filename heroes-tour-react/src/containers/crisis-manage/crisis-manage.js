import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddItem, EditableItem } from '../../component';

import { addCrisis, deleteCrisis, selectCrisis, unselectHero } from '../../redux/action';

class CrisisManage extends Component {
    componentWillUnmount() {
        this.props.unSelectCrisis();
    }
    render() {
        const { crisisLibary, addCrisis, deleteCrisis, selectCrisis } = this.props;
        const crisisItems = crisisLibary.map(crisis => (
            <EditableItem
            key={crisis.id}
            name={crisis.name}
            id={crisis.id}
            deleteHander={deleteCrisis}
            selectHander={selectCrisis}
            />
        ));
        return (
            <ul className="manage-panel-container">
                <AddItem addBtnCallback={addCrisis} />
                {crisisItems}
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCrisis: bindActionCreators(addCrisis, dispatch),
    deleteCrisis: bindActionCreators(deleteCrisis, dispatch),
    selectCrisis: bindActionCreators(selectCrisis, dispatch),
    unSelectCrisis: bindActionCreators(unselectHero, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CrisisManage);