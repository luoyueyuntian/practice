import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { MessageForm } from '../../component';
import { addMessage, hideContactPanel } from '../../redux/action';

import './compose.css';

class Compose extends Component {
    render() {
        const { heroes, showContact, nextMsgId, isLogin, hideContactPanel, addMessage } = this.props;
        if (showContact) {
            return (
                <MessageForm 
                heroes={heroes} 
                nextMsgId={nextMsgId}
                isLogin={isLogin}
                hideContactPanel={hideContactPanel}
                sendMessage={addMessage}
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
    nextMsgId: state.nextMsgId,
    isLogin: state.isLogin
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({ addMessage, hideContactPanel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);