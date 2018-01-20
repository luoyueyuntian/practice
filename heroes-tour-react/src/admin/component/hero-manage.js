import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addHero, deleteHero, updateHero, selectHero, unSelectHero, updateNextHeroId } from '../../hero/action';
import HeroManageList from './hero-manage/hero-list';

class HeroManage extends Component {
    componentWillUnmount() {
        this.props.unSelectHero();
    }
    render() {
        const { heroes, nextHeroId, addHero, deleteHero, updateHero, selectHero, updateNextHeroId } = this.props;
        return (
            <HeroManageList
            heroes={heroes}
            nextHeroId={nextHeroId}
            addHero={addHero}
            deleteHero={deleteHero}
            updateHero={updateHero}
            selectHero={selectHero}
            unSelectHero={unSelectHero}
            updateNextHeroId={updateNextHeroId}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    nextHeroId: state.nextHeroId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addHero: bindActionCreators(addHero, dispatch),
    deleteHero: bindActionCreators(deleteHero, dispatch),
    updateHero: bindActionCreators(updateHero, dispatch),
    selectHero: bindActionCreators(selectHero, dispatch),
    unSelectHero: bindActionCreators(unSelectHero, dispatch),
    updateNextHeroId: bindActionCreators(updateNextHeroId, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroManage);