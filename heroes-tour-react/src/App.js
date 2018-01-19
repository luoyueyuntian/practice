import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Hero from './hero';
import action from './action';

class App extends Component {
    render() {
        const { heroes } = this.props;
        return (
            <Hero heroes={heroes}/>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);