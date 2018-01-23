import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { AddressList } from '../../component';
import { addMessage, hideContactPanel } from '../../redux/action';

import './compose.css';

class Compose extends Component {
    constructor() {
        super();
        this.addressInput = null;
        this.uploadAdress = this.uploadAdress.bind(this);
        this.send = this.send.bind(this);
    }
    uploadAdress(input) {
        this.addressInput = input;
    }
    send() {
        const { addMessage } = this.props;
        const author = this.props.isLogin ? 'admin' : 'visitor';
        addMessage(this.msgInput.value, author, this.addressInput.value);
        this.msgInput.value = '';
    }
    render() {
        const { heroes, showContact, hideContactPanel } = this.props;
        if (showContact) {
            return (
                <div className="message-container">
                <span className="close-icon" onClick={hideContactPanel}>¡Á</span>
                <div className="form-section">
                    <span className="message-label">To:</span>
                    <AddressList heroes={heroes} uploadAdress={this.uploadAdress}/>
                </div>
                <div className = "form-section" >
                    <span className="message-label">Info:</span>
                    <textarea
                    className = "message-input"
                    cols = "30"
                    rows = "10"
                    ref={(textarea) => this.msgInput = textarea}>
                    </textarea> 
                </div>
                <div className = "edit-container" >
                    <button onClick={this.send}>Send</button>
                    <button onClick={hideContactPanel}>Cancel</button>
                </div>
            </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    heroes: state.heroes,
    showContact: state.showContact,
    isLogin: state.isLogin
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({ addMessage, hideContactPanel }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Compose);