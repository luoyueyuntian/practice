import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CrisisManageList from './crisis-manage/crisis-manage-list';

import { addCrisis, deleteCrisis, updateCrisis, selectCrisis, unSelectCrisis } from '../../crisis/action';

class CrisisManage extends Component {
    componentWillUnmount() {
        this.props.unSelectCrisis();
    }
    render() {
        const { crisisLibary, addCrisis, deleteCrisis, updateCrisis, selectCrisis } = this.props;
        return (
            <CrisisManageList
            crisisLibary={crisisLibary}
            addCrisis={addCrisis}
            deleteCrisis={deleteCrisis}
            selectCrisis={selectCrisis}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCrisis: bindActionCreators(addCrisis, dispatch),
    deleteCrisis: bindActionCreators(deleteCrisis, dispatch),
    updateCrisis: bindActionCreators(updateCrisis, dispatch),
    selectCrisis: bindActionCreators(selectCrisis, dispatch),
    unSelectCrisis: bindActionCreators(unSelectCrisis, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CrisisManage);