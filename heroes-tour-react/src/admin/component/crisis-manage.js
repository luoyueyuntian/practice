import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CrisisManageList from './crisis-manage/crisis-manage-list';

class CrisisManage extends Component {
    render() {
        const { crisisLibary } = this.props;
        return (
            <CrisisManageList crisisLibary={crisisLibary} / >
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary
});
// const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps)(CrisisManage);