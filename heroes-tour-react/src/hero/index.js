import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeroList from './component/heroList';
import * as action from './action';
import './hero.css';

import HeroDetail from '../hero-detail';

class Hero extends Component {
    render() {
        const { heroes, curHeroId, msgs, updateHero, selectHero, unSelectHero, filterValue, filterHeroes } = this.props;
        if (curHeroId !== -1) {
            let selectHero = {
                name: '',
                id: -1
            };
            heroes.forEach(hero => {
                if (hero.id === curHeroId) {
                    selectHero = hero;
                }
            })
            return (<HeroDetail
                hero={selectHero}
                msgs={msgs}
                unSelectHero={unSelectHero}
                updateHero={updateHero}
                />);
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