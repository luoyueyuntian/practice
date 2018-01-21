import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addHero, deleteHero, updateHero, selectHero, unSelectHero, updateNextHeroId } from '../../hero/action';
import HeroManageList from './hero-manage/hero-list';
import HeroDetail from '../../hero-detail';

class HeroManage extends Component {
    componentWillUnmount() {
        this.props.unSelectHero();
    }
    render() {
        const { heroes, msgs, curHeroId, nextHeroId, updateHero, addHero, deleteHero, selectHero, unSelectHero, updateNextHeroId } = this.props;
        let heroDetail = '';
        if (curHeroId !== -1) {
            const MATCH_ALL = 0;
            let curHero = {
                name: '',
                id: -1
            };
            let relateMessages = [];
            heroes.forEach(hero => {
                if (hero.id === curHeroId) {
                    curHero = hero;
                }
            });
            msgs.forEach(msg => {
                if (msg.addressee === MATCH_ALL) {
                    relateMessages.push(msg);
                }
                if (msg.addressee === curHeroId) {
                    relateMessages.push(msg);
                }
            });
            heroDetail = <HeroDetail
            hero={curHero}
            msgs={relateMessages}
            updateHero={updateHero}
            unSelectHero={unSelectHero}
            />;
        }
        return (
            <div>
                <HeroManageList
                heroes={heroes}
                nextHeroId={nextHeroId}
                addHero={addHero}
                deleteHero={deleteHero}
                selectHero={selectHero}
                unSelectHero={unSelectHero}
                updateNextHeroId={updateNextHeroId}
                />
                {heroDetail}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    nextHeroId: state.nextHeroId,
    msgs: state.msgs,
    curHeroId: state.curHeroId
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