import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addHero, deleteHero, updateHero, selectHero, unSelectHero } from '../../hero/action';
import HeroManageList from './hero-manage/hero-list';

class HeroManage extends Component {
    componentWillUnmount() {
        this.props.unSelectHero();
    }
    render() {
        const { heroes, addHero, deleteHero, updateHero, selectHero } = this.props;
        return (
            <HeroManageList
            heroes={heroes}
            addHero={addHero}
            deleteHero={deleteHero}
            updateHero={updateHero}
            selectHero={selectHero}
            unSelectHero={unSelectHero}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addHero: bindActionCreators(addHero, dispatch),
    deleteHero: bindActionCreators(deleteHero, dispatch),
    updateHero: bindActionCreators(updateHero, dispatch),
    selectHero: bindActionCreators(selectHero, dispatch),
    unSelectHero: bindActionCreators(unSelectHero, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroManage);