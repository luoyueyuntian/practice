import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeroList from './component/heroList';
import * as action from './action';
import './hero.css';

import HeroDetail from '../hero-detail';

class Hero extends Component {
    componentWillUnmount() {
        this.props.unSelectHero();
    }
    render() {
        const { heroes, curHeroId, msgs, updateHero, selectHero, unSelectHero, filterValue, filterHeroes } = this.props;
        if (curHeroId !== -1) {
            const MATCH_ALL = 0;
            let selectHero = {
                name: '',
                id: -1
            };
            let relateMsgs = [];
            heroes.forEach(hero => {
                if (hero.id === curHeroId) {
                    selectHero = hero;
                }
            });
            msgs.forEach(msg => {
                if (msg.addressee === MATCH_ALL) {
                    relateMsgs.push(msg);
                }
                if (msg.addressee === curHeroId) {
                    relateMsgs.push(msg);
                }
            });
            return (
                <div>
                    <div className="back-btn" onClick={unSelectHero}><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</div>
                    <HeroDetail
                    hero={selectHero}
                    msgs={relateMsgs}
                    unSelectHero={unSelectHero}
                    updateHero={updateHero}
                    />
                </div>
            );
        } else {
            return (
                <HeroList
                heroes={heroes}
                selectHero={selectHero}
                filterValue={filterValue}
                filterHeroes={filterHeroes}
                />
            );
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroes,
        filterValue: state.filterValue,
        curHeroId: state.curHeroId,
        msgs: state.msgs
    }
};
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Hero);