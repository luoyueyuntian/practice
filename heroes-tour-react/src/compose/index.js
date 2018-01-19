import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MessageForm from './component/message-form';
import * as action from './action';

import './compose.css';

class Compose extends Component {
    render() {
        const { heroes, showContact, hideContactPanel } = this.props;
        if (showContact) {
            return (
                <MessageForm heroes={heroes} hideContactPanel={hideContactPanel}/>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    showContact: state.showContact
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);