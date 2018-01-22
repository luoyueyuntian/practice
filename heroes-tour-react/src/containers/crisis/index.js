import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CrisisList } from '../../component';

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
export default connect(mapStateToProps)(Crisis);