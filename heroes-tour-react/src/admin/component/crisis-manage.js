import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CrisisManageList from './crisis-manage/crisis-manage-list';

import { addCrisis, deleteCrisis, selectCrisis, unSelectCrisis, updateNextCrisisId } from '../../crisis/action';

class CrisisManage extends Component {
    componentWillUnmount() {
        this.props.unSelectCrisis();
    }
    render() {
        const { crisisLibary, nextCrisisId, addCrisis, deleteCrisis, selectCrisis, updateNextCrisisId } = this.props;
        return (
            <CrisisManageList
            crisisLibary={crisisLibary}
            nextCrisisId={nextCrisisId}
            addCrisis={addCrisis}
            deleteCrisis={deleteCrisis}
            selectCrisis={selectCrisis}
            updateNextCrisisId={updateNextCrisisId}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary,
    nextCrisisId: state.nextCrisisId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addCrisis: bindActionCreators(addCrisis, dispatch),
    deleteCrisis: bindActionCreators(deleteCrisis, dispatch),
    selectCrisis: bindActionCreators(selectCrisis, dispatch),
    unSelectCrisis: bindActionCreators(unSelectCrisis, dispatch),
    updateNextCrisisId: bindActionCreators(updateNextCrisisId, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CrisisManage);