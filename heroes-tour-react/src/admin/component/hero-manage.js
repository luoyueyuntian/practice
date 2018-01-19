import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeroManageList from './hero-manage/hero-list';

class HeroManage extends Component {
    render() {
        const { heroes } = this.props;
        return (
            <HeroManageList heroes={heroes} />
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes
})
// const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps)(HeroManage);