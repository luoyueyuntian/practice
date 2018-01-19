import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import CrisisList from './component/crisis-list';
import * as action from './action';

class Crisis extends Component {
    render() {
        const { crisisLibary } = this.props;
        return (
            <CrisisList crisisLibary={crisisLibary}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    crisisLibary: state.crisisLibary
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Crisis);