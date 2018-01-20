import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MessageForm from './component/message-form';
import * as action from './action';

import './compose.css';

class Compose extends Component {
    render() {
        const { heroes, showContact, nextMsgIs, hideContactPanel, sendMessage, updateNextMessageId } = this.props;
        if (showContact) {
            return (
                <MessageForm 
                heroes={heroes} 
                nextMsgIs={nextMsgIs}
                hideContactPanel={hideContactPanel}
                sendMessage={sendMessage}
                updateNextMessageId={updateNextMessageId}
                />
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    showContact: state.showContact,
    nextMsgIs: state.nextMsgIs
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);