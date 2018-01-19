import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MessageForm from './component/message-form';
import * as action from './action';

import './compose.css';

class Compose extends Component {
    render() {
        const { heroes } = this.props;
        return (
            <MessageForm heroes={heroes}/>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);