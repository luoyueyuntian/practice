import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeroList from './component/heroList';
import * as action from './action';
import './hero.css';

class Hero extends Component {
    render() {
        const { heroes, addHero, deleteHero } = this.props;
        return (
            <HeroList
            heroes={heroes}
            addHero={addHero}
            deleteHero={deleteHero}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Hero);