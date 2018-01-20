import React, { Component } from 'react';

import AddressList from './address-list';

export default class MessageForm extends Component {
    constructor() {
        super();
        this.address = '';
        this.cacheAddress = this.cacheAddress.bind(this);
        this.send = this.send.bind(this);
    }
    cacheAddress(address) {
        this.address = address;
    }
    send() {
        const { nextMsgIs, sendMessage, updateNextMessageId } = this.props;
        sendMessage(nextMsgIs, this.msgInput.value, 'visitor', this.address);
        updateNextMessageId();
    }
    render() {
        const { heroes, hideContactPanel } = this.props;
        return (
            <div className="message-container">
				<span className="close-icon" onClick={hideContactPanel}>×</span>
				<div className="form-section">
		        	<span className="message-label">To:</span>
		        	<AddressList
		            heroes={heroes}
		            cacheAddress={this.cacheAddress}
		            />
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
    }
}