import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import MessageForm from './component/message-form';
import * as action from './action';

import './compose.css';

class Compose extends Component {
    render() {
        const { heroes, showContact, nextMsgId, hideContactPanel, sendMessage, updateNextMessageId } = this.props;
        if (showContact) {
            return (
                <MessageForm 
                heroes={heroes} 
                nextMsgId={nextMsgId}
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
    nextMsgId: state.nextMsgId
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);