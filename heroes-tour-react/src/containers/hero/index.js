import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateHero, selectHero, unselectHero } from '../../redux/action';
import './hero.css';

import { Item, HeroSearch, HeroDetail } from '../../component';

class Hero extends Component {
    componentWillUnmount() {
        this.props.unselectHero();
    }
    render() {
        const { heroes, curHeroId, msgs, updateHero, selectHero, unselectHero, filterValue, filterHeroes } = this.props;
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
                    <div className="back-btn" onClick={unselectHero}><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</div>
                    <HeroDetail
                    hero={selectHero}
                    msgs={relateMsgs}
                    unselectHero={unselectHero}
                    updateHero={updateHero}
                    />
                </div>
            );
        } else {
            return (
                <div>
                <ul className="list">
                    {heroes.map(hero => <Item
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    clickHander={selectHero}
                    />
                )}
                </ul>
                <div className="search-panel">
                    <HeroSearch
                    heroes={heroes}
                    filterValue={filterValue}
                    filterHeroes={filterHeroes}
                    selectHero={selectHero}
                    />
                </div>
            </div>
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
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    updateHero,
    selectHero,
    unselectHero
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Hero);