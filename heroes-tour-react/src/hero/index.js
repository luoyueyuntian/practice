import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeroList from './component/heroList';
import * as action from './action';
import './hero.css';

class Hero extends Component {
    render() {
        const { heroes, addHero, deleteHero, filterValue, filterHeroes } = this.props;
        return (
            <HeroList
            heroes={heroes}
            addHero={addHero}
            deleteHero={deleteHero}
            filterValue={filterValue}
            filterHeroes={filterHeroes}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        heroes: state.heroes,
        filterValue: state.filterValue,
        router: state.router
    }
};
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Hero);