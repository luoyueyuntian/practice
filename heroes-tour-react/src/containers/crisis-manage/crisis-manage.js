import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CrisisManageList } from '../../component';

import { addCrisis, deleteCrisis, selectCrisis, unselectHero } from '../../redux/action';

class CrisisManage extends Component {
    componentWillUnmount() {
        this.props.unSelectCrisis();
    }
    render() {
        const { crisisLibary, nextCrisisId, addCrisis, deleteCrisis, selectCrisis } = this.props;
        return (
            <CrisisManageList
            crisisLibary={crisisLibary}
            nextCrisisId={nextCrisisId}
            addCrisis={addCrisis}
            deleteCrisis={deleteCrisis}
            selectCrisis={selectCrisis}
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
    unSelectCrisis: bindActionCreators(unselectHero, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CrisisManage);